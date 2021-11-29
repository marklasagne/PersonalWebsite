/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'


export default function Model({ ...props }) {
  const { viewport } = useThree()

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);
  
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);
  
    return mousePosition;
  };


  const position = useMousePosition();
  const { nodes, materials } = useGLTF('/portrait.gltf')
  const group = useRef()
  let xMiddle = viewport.width / 2
  let yMiddle = viewport.height / 2

  useFrame(() => {
    // bottom right
    const x = (position.x - xMiddle)/ 4000
    const y = (position.y - yMiddle) / 4000
    group.current.rotation.x = y
    group.current.rotation.y = x
    group.current.rotation.z = 0
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.beanie_low_RetopoFlow017.geometry}
        material={materials['Material.002']}
        position={[0, 0.94, -0.15]}
        rotation={[1.45, 0, 0]}
        scale={[0.77, 0.74, 0.83]}
      />
      <mesh geometry={nodes.FaceBuilderHead.geometry} material={materials.FaceTexture} />
      <mesh geometry={nodes.Mesh.geometry} material={materials.Mustache} />
      <mesh
        geometry={nodes.Torus.geometry}
        material={materials['Material.005']}
        position={[0, -0.07, 1.23]}
        rotation={[1.56, 0, 0.02]}
        scale={[0.06, 0.06, 0.06]}
      />
    </group>
  )
}

useGLTF.preload('/portrait.gltf')
