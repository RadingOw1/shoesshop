import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { BufferAttribute, Color } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function FloatingIsland() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/adidas_ozweego.glb");

  useEffect(() => {
    if(!gltf) return;

    let mesh = gltf.scene.children[0];
    console.log(mesh);

  }, [gltf]);

  return (
    <primitive object={gltf.scene} />
  )
}