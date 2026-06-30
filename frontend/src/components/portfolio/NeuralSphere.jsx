/* eslint-disable react/no-unknown-property */
import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Wireframe = () => {
  const ref = useRef();
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.18;
      ref.current.rotation.x += dt * 0.08;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.55, 2]} />
      <meshBasicMaterial color="#00F5FF" wireframe transparent opacity={0.55} />
    </mesh>
  );
};

const InnerOrb = () => {
  const ref = useRef();
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y -= dt * 0.12;
      ref.current.rotation.z += dt * 0.05;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.95, 32, 32]} />
      <meshBasicMaterial color="#8B5CF6" transparent opacity={0.16} />
    </mesh>
  );
};

const Nodes = () => {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = [];
    const n = 80;
    for (let i = 0; i < n; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.7;
      arr.push(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(arr);
  }, []);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.22;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00FFFF"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const NeuralSphere = ({ className = "" }) => {
  return (
    <div className={"relative w-full h-full " + className} data-testid="neural-sphere">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.5} color="#00F5FF" />
        <pointLight position={[-3, -2, -2]} intensity={1.2} color="#8B5CF6" />
        <Suspense fallback={null}>
          <InnerOrb />
          <Wireframe />
          <Nodes />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 pointer-events-none rounded-full bg-radial-glow opacity-60" />
    </div>
  );
};

export default NeuralSphere;
