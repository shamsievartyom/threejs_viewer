import { FC, useEffect, useState } from 'react'
import { useCursor } from "@react-three/drei";
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { setCurrent, switchMode } from '../../../redux/slices/transformSlice';
import * as THREE from 'three';

interface MeshProps {
    object3D: THREE.Mesh,
}

const Mesh: FC<MeshProps> = ({ object3D }) => {

    useEffect(()=>{
        console.log(object3D)
    },[])
    
    const dispatch = useAppDispatch();

    const { current } = useAppSelector((state) => state.transform);

    const [hovered, setHovered] = useState(false)
    useCursor(hovered)
    return (
        
        <mesh
            onClick={(e) => { e.stopPropagation(); dispatch(setCurrent(object3D.name)); }}
            onContextMenu={(e) => {
                if (current === object3D.name) {
                    e.stopPropagation();
                    dispatch(switchMode());
                }
            }}
            castShadow
            receiveShadow
            position={object3D.position}
            rotation={object3D.rotation}
            scale={object3D.scale}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={() => setHovered(false)}
            name={object3D.name}
            geometry={object3D.geometry}
            material={object3D.material}   
            material-color={current === object3D.name ? '#ff6080': 'white'}
            dispose={null}
        />
    )
}

export default Mesh
