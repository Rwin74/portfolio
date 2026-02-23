import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';

const HeroParticles = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <Suspense fallback={null}>
                <Particles count={700} />
            </Suspense>
        </Canvas>
    );
};

export default HeroParticles;
