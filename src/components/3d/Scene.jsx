import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Float, ContactShadows, Environment, MeshDistortMaterial } from '@react-three/drei';

function RotatingShape() {
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = t * 0.2;
        ref.current.rotation.y = t * 0.2;
        ref.current.position.y = Math.sin(t * 0.5) * 0.1;
    });

    return (
        <mesh ref={ref} scale={2}>
            <icosahedronGeometry args={[1, 0]} />
            <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
                metalness={0.8}
            />
        </mesh>
    );
}

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#f59e0b" />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <RotatingShape />
            </Float>
            <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
            <Environment preset="city" />
        </Canvas>
    );
}
