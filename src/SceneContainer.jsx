import { OrbitControls, PerspectiveCamera, Environment, Float,  } from "@react-three/drei";
import { EffectComposer, HueSaturation, ChromaticAberration, GodRays, DepthOfField, BrightnessContrast } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { Suspense } from "react";
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
import { FloatingIsland } from "./FloatingIsland";
let lightColor = new Color(1, 0.2, 0.1);
let mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 10,
  })
);
mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 1.7, -4.1);
mesh.scale.set(10.5, 10, 10);

export function SceneContainer() {
  return (
    <>
        <Suspense fallback={null}>
          <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
          <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap.hdr"} />
          <PerspectiveCamera makeDefault fov={35} position={[1.75, -2.85, 2.35]} />
          <OrbitControls 
            target={[0, 1, 0]}
            maxPolarAngle={Math.PI * 0.5 }
            enableDamping={true}
            rotateSpeed={0.2}
            enableZoom={false}
            enablePan={false}
          />
        
          <Float
            speed={1.5} 
            rotationIntensity={1.6} 
            floatIntensity={1.6}
          >
            <FloatingIsland />
          </Float>
        </Suspense>
    </>
  );
}
