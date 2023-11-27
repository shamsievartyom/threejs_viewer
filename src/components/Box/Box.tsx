import React, { useRef } from 'react'
import { useFrame, MeshProps } from '@react-three/fiber'
import { Mesh } from 'three'

interface BoxProps extends MeshProps {
  color?: string;
}

const Box: React.FC<BoxProps> = (props) => {
  const meshRef = useRef<Mesh | null>(null)

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.01
  })

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color || 'orange'} />
    </mesh>
  )
}

export default Box