import React, { createContext, useContext, useState, useEffect } from 'react';

const BlueprintContext = createContext();

export function BlueprintProvider({ children }) {
    const [isBlueprintMode, setIsBlueprintMode] = useState(false);
    const [hoveredElementInfo, setHoveredElementInfo] = useState(null);

    useEffect(() => {
        if (!isBlueprintMode) {
            document.documentElement.classList.remove('blueprint-mode');
            return;
        }

        document.documentElement.classList.add('blueprint-mode');

        const handleMouseOver = (e) => {
            // Find the closest element that makes sense to measure (avoid text nodes, svg paths, etc)
            const el = e.target.closest('div, section, header, footer, main, article, nav, img, button, a, span, p, h1, h2, h3, h4, h5, h6');
            if (el) {
                const rect = el.getBoundingClientRect();
                setHoveredElementInfo({
                    tag: el.tagName.toLowerCase(),
                    width: Math.round(rect.width),
                    height: Math.round(rect.height),
                    top: rect.top,
                    left: rect.left,
                });

                el.classList.add('blueprint-hovered');
            }
        };

        const handleMouseOut = (e) => {
            const el = e.target.closest('div, section, header, footer, main, article, nav, img, button, a, span, p, h1, h2, h3, h4, h5, h6');
            if (el) {
                el.classList.remove('blueprint-hovered');
            }
            setHoveredElementInfo(null);
        };

        // Use passive listener for better scrolling performance
        document.addEventListener('mouseover', handleMouseOver, { passive: true });
        document.addEventListener('mouseout', handleMouseOut, { passive: true });

        return () => {
            document.documentElement.classList.remove('blueprint-mode');
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);

            // Cleanup any remaining hover states
            document.querySelectorAll('.blueprint-hovered').forEach(el => el.classList.remove('blueprint-hovered'));
        };
    }, [isBlueprintMode]);

    return (
        <BlueprintContext.Provider value={{ isBlueprintMode, setIsBlueprintMode }}>
            {children}
            {isBlueprintMode && hoveredElementInfo && (
                <div
                    className="fixed pointer-events-none z-[99999] bg-[#002266] border border-[#aaddff] text-[#aaddff] text-[10px] px-1.5 py-0.5 font-mono shadow-[2px_2px_0px_rgba(0,0,0,0.5)] whitespace-nowrap"
                    style={{
                        top: `${Math.max(0, hoveredElementInfo.top - 20) + 2}px`,
                        left: `${Math.max(0, hoveredElementInfo.left) + 2}px`,
                    }}
                >
                    &lt;{hoveredElementInfo.tag}&gt; {hoveredElementInfo.width}×{hoveredElementInfo.height}
                </div>
            )}
        </BlueprintContext.Provider>
    );
}

export const useBlueprint = () => useContext(BlueprintContext);
