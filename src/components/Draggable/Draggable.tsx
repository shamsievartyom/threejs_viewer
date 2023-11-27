import { useFrame, useThree } from "@react-three/fiber"
import { useState, useRef, ReactNode } from "react"
import { Mesh, Vector3 } from "three"
import { ThreeEvent } from "@react-three/fiber"

interface DraggableProps {
 children: ReactNode;
}

const Draggable = (props: DraggableProps) => {
 const meshRef = useRef<Mesh | null>(null)
 const [active, setActive] = useState(false)
 const [offset, setOffset] = useState({ x: 0, y: 0, z: 0 })
 const { camera } = useThree()

 const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
 event.stopPropagation()
 setActive(true)
 const vector = new Vector3(event.clientX, event.clientY, 0.5)
 vector.unproject(camera)
 setOffset({ x: vector.x, y: vector.y, z: vector.z })
 }

 const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
 event.stopPropagation()
 setActive(false)
 }

 useFrame((state) => {
 if (!active || !state.pointer || !meshRef.current) return
 meshRef.current.position.x = state.pointer.x - offset.x
 meshRef.current.position.y = state.pointer.y - offset.y
 })

 return (
 <mesh
 {...props}
 ref={meshRef}
 onPointerDown={handlePointerDown}
 onPointerUp={handlePointerUp}>
 {props.children}
 </mesh>
 )
}

export default Draggable