import { FC } from 'react'
import { useFBX } from "@react-three/drei";
import { MeshProps } from '@react-three/fiber';
import Model from '../Model/Model';

interface ModelProps {
    url: string,
}

const FBXModel: FC<ModelProps & MeshProps> = ({ url, ...props }) => {

    const { children } = useFBX(url)

    return (
        <>
            {children.map((el) => (
                <Model object3D={el} {...props} key={el.uuid}/>
            ))}
        </>
    )
}

export default FBXModel
