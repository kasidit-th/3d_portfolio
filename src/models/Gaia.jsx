import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import GaiaScene from "../assets/3d/blackson.glb";

export function Gaia({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(GaiaScene);



  return (
    <mesh {...props} ref={ref}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}