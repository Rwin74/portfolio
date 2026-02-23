import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Magnetic = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    // Use spring physics for a smooth settling effect
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    return (
        <motion.div
            style={{ position: 'relative', x: springX, y: springY }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
