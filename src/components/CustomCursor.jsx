import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            const isClickable = e.target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
            setIsHovered(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[10000] mix-blend-difference hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    scale: isHovered ? 1.5 : 1,
                    backgroundColor: isHovered ? 'var(--color-primary)' : 'transparent',
                    opacity: isHovered ? 0.5 : 1,
                }}
            />
            <style jsx global>{`
                @media (min-width: 768px) {
                    * {
                        cursor: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
