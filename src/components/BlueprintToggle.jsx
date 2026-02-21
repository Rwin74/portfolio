import React from 'react';
import { useBlueprint } from '../context/BlueprintContext';
import { DraftingCompass } from 'lucide-react';

const BlueprintToggle = () => {
    const { isBlueprintMode, setIsBlueprintMode } = useBlueprint();

    return (
        <button
            onClick={() => setIsBlueprintMode(!isBlueprintMode)}
            className={`fixed bottom-6 right-6 z-[100] p-3 rounded-full flex items-center justify-center gap-2 font-mono text-sm transition-all duration-300 shadow-xl border backdrop-blur-md ${isBlueprintMode
                    ? 'bg-[#002266] text-[#aaddff] border-[#aaddff] shadow-[0_0_20px_rgba(0,68,204,0.6)]'
                    : 'bg-card/80 text-foreground border-border hover:bg-primary hover:text-white'
                }`}
            aria-label="Toggle Blueprint Mode"
            title="Toggle Blueprint Mode (X-Ray View)"
        >
            <DraftingCompass size={20} className={isBlueprintMode ? 'animate-pulse' : ''} />
            <span className={`font-bold transition-all duration-300 ${isBlueprintMode ? 'w-20 opacity-100 ml-1' : 'w-0 opacity-0 overflow-hidden'}`}>
                X-RAY
            </span>
        </button>
    );
};

export default BlueprintToggle;
