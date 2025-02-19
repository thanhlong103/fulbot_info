// Fulbot3DModel.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function FulbotModel() {
    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.y += 0.01; // Auto-rotate
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
}

function Fulbot3DModel() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <FulbotModel />
            <OrbitControls />
        </Canvas>
    );
}

export default Fulbot3DModel;