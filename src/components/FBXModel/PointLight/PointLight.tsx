import { FC, useEffect, useRef, useState } from 'react'
import { useCursor } from "@react-three/drei";
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { setCurrent, switchMode } from '../../../redux/slices/transformSlice';
import * as THREE from 'three';
import { EdgesGeometry, LineBasicMaterial, LineSegments } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Canvas, extend } from '@react-three/fiber';
import { ShaderMaterial, BackSide, Vector3 } from 'three';

interface PointLightProps {
    object3D: THREE.PointLight,
}

const PointLight: FC<PointLightProps> = ({ object3D }) => {

    const ref = useRef();
    const { camera } = useThree();
    const scale = 0.02; // Установите масштаб так, чтобы он соответствовал вашим потребностям
  
    useFrame(() => {
      if (ref.current) {
        ref.current.lookAt(camera.position);
        const distance = camera.position.distanceTo(ref.current.position);
        ref.current.scale.set(scale * distance, scale * distance, scale * distance);
      }
    });
    return (
        <>
            <pointLight position={object3D.position} />
            <mesh ref={ref} position={position}>
                <ringGeometry args={[0.5, 1, 32]} />
                <meshBasicMaterial side={THREE.DoubleSide} color="yellow" />
            </mesh>
        </>
    );

    return (
        <group
            onClick={(e) => { e.stopPropagation(); dispatch(setCurrent(object3D.name)); }}
            onContextMenu={(e) => {
                if (current === object3D.name) {
                    e.stopPropagation();
                    dispatch(switchMode());
                }
            }}
            position={object3D.position}
            rotation={object3D.rotation}
            scale={object3D.scale}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={() => setHovered(false)}
            name={object3D.name}
            // material-color={current === object3D.name ? '#ff6080' : 'white'}
            dispose={null}>
            <pointLight
                scale={object3D.scale}
                intensity={object3D.intensity} />
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshBasicMaterial color={'yellow'} side={THREE.BackSide} />
            </mesh>
        </group>
    );
    return (

        <pointLight
            // Click sets the mesh as the new target
            onClick={(e) => { e.stopPropagation(); dispatch(setCurrent(object3D.name)); }}
            onContextMenu={(e) => {
                if (current === object3D.name) {
                    e.stopPropagation();
                    dispatch(switchMode());
                }
            }}
            position={object3D.position}
            rotation={object3D.rotation}
            scale={object3D.scale}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={() => setHovered(false)}
            name={object3D.name}
            material-color={current === object3D.name ? '#ff6080' : 'white'}
            dispose={null}
            intensity={object3D.intensity}
        />
    )
}

export default PointLight
