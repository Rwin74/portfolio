import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 500 }) => {
    const pointsRef = useRef();

    // Create random positions for particles
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3);
        const distance = 10;
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * distance;     // x
            p[i * 3 + 1] = (Math.random() - 0.5) * distance; // y
            p[i * 3 + 2] = (Math.random() - 0.5) * distance; // z
        }
        return p;
    }, [count]);

    // Animate particles based on mouse and time
    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Slow constant rotation
        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.05;
            pointsRef.current.rotation.x = time * 0.02;

            // Subtle reaction to mouse pointer normalized (-1 to 1)
            const mouseX = state.mouse.x;
            const mouseY = state.mouse.y;

            // Smooth interpolation towards target rotation
            pointsRef.current.rotation.x += (mouseY * 0.5 - pointsRef.current.rotation.x) * 0.05;
            pointsRef.current.rotation.y += (mouseX * 0.5 - pointsRef.current.rotation.y) * 0.05;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#3b82f6"
                sizeAttenuation={true}
                transparent={true}
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export default Particles;
