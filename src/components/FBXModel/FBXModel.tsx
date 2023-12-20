import { FC } from 'react'
import { useFBX } from "@react-three/drei";
import { MeshProps } from '@react-three/fiber';
import Mesh from './Mesh/Mesh';
import * as THREE from 'three';
import PointLight from './PointLight/PointLight';

interface ModelProps {
    url: string,
}

const FBXModel: FC<ModelProps & MeshProps> = ({ url }) => {

    const { children } = useFBX(url)

    return (
        <>
            {children.map((el) => {
                if (el instanceof THREE.Mesh) return <Mesh object3D={el} key={el.uuid} />
                else if (el instanceof THREE.PointLight) return <PointLight object3D={el} key={el.uuid} />
                // else return undefined
            })}
        </>
    )
}

export default FBXModel
