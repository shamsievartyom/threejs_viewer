import React from 'react'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

const Scene = () => {
    const fbx = useLoader(FBXLoader, '/Scene.fbx')
    return (
        <primitive object={fbx} />
    )
}

export default Scene