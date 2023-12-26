import { useThree } from '@react-three/fiber'
import React from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector';

const OjbjectSettings = () => {

    const scene = useThree((state) => state.scene)

    // let { current } = useAppSelector((state) => state.transform);

    // !current ? current = '' : ''

    // const kek = scene.getObjectByName(current)

    return (
        <>
            {/* <h1>Object Settings</h1>
            {current !== '' ?
                <span>{kek?.name}</span>
                : <p>Select Object</p>
            } */}
        </>
    )
}

export default OjbjectSettings