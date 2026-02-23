import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const text = "<AtakanYağlı />";
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        // Wait a bit after typing is complete before triggering the exit
        const timer = setTimeout(() => {
            setIsTypingComplete(true);
            setTimeout(() => {
                onComplete();
            }, 500); // Faster exit queue
        }, text.length * 30 + 300); // 30ms typing duration + 300ms delay

        return () => clearTimeout(timer);
    }, [onComplete, text.length]);

    return (
        <AnimatePresence>
            {!isTypingComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                >
                    <div className="font-mono text-2xl md:text-4xl font-bold flex">
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, display: "none" }}
                                animate={{ opacity: 1, display: "inline-block" }}
                                transition={{
                                    delay: index * 0.03, // 30ms delay instead of 100ms
                                    duration: 0.05,
                                    type: "tween"
                                }}
                                className={
                                    char === "<" || char === "/" || char === ">"
                                        ? "text-primary"
                                        : "text-foreground"
                                }
                            >
                                {char}
                            </motion.span>
                        ))}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            className="w-[2px] h-8 md:h-10 bg-primary ml-1 block"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
