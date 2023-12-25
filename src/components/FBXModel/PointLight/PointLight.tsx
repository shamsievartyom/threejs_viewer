import { FC, useRef, useState } from 'react'
import { useCursor } from "@react-three/drei";
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { setCurrent } from '../../../redux/slices/transformSlice';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

interface PointLightProps {
    object3D: THREE.PointLight,
}

const PointLight: FC<PointLightProps> = ({ object3D }) => {

    const ref = useRef<THREE.Group>(null);
    const { camera } = useThree();

    useFrame(() => {
        if (ref.current) {
            const scale = camera.position.distanceTo(ref.current.position) / 60;
            ref.current.scale.set(scale, scale, scale);
            ref.current.quaternion.copy(camera.quaternion);
        }
    });

    const dispatch = useAppDispatch();

    const { current } = useAppSelector((state) => state.transform);

    const [hovered, setHovered] = useState(false)
    useCursor(hovered)

    return (
        <group
            onClick={(e) => { e.stopPropagation(); dispatch(setCurrent(object3D.name)); }}
            position={object3D.position}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={() => setHovered(false)}
            name={object3D.name}
            dispose={null}
            ref={ref}
        >
            <pointLight
                distance={1000}
                castShadow
                intensity={object3D.intensity * 12.57 * 10}
                shadow-mapSize-width={1024 * 2}
                shadow-mapSize-height={1024 * 2}
            />
            <mesh
                material-color={current === object3D.name ? '#ff6080' : 'white'}
            >
                <ringGeometry args={[0.8, 1, 32]} />
                <meshBasicMaterial side={THREE.DoubleSide} color="yellow" />
            </mesh>
        </group>
    );
}

export default PointLight
