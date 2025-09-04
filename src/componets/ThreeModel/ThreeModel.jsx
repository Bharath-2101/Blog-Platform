import { fragment, vertex } from "@/shaders";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { DoubleSide, MathUtils } from "three";

const ThreeModel = () => {
  const mesh = useRef();
  const hover = useRef(false);
  const { viewport } = useThree();
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.7 : 0.35,
      0.02
    );
  });
  const getScale = () => {
    const max = 1.1;
    const min = 0.7;
    const scale = clamp(viewport.width / 6, min, max);
    return scale;
  };

  return (
    <group>
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        scale={getScale()}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          fragmentShader={fragment}
          vertexShader={vertex}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    </group>
  );
};

export default ThreeModel;
