import { OrbitControls, TransformControls } from '@react-three/drei';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useThree } from '@react-three/fiber';
import { modes, setTransform } from '../../redux/slices/transformSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const Controls = () => {
    const { current, mode } = useAppSelector((state) => state.transform);
    const scene = useThree((state) => state.scene)

    const dispatch = useAppDispatch()

    const handleChange = () => {
        if (current) {
            const selectedObject = scene.getObjectByName(current)
            if (selectedObject) {
                dispatch(setTransform({
                    position: {
                        x: selectedObject?.position.x,
                        y: selectedObject?.position.y,
                        z: selectedObject?.position.z,
                    },
                    rotation: {
                        x: selectedObject?.rotation.x,
                        y: selectedObject?.rotation.y,
                        z: selectedObject?.rotation.z,
                    },
                    scale: {
                        x: selectedObject?.scale.x,
                        y: selectedObject?.scale.y,
                        z: selectedObject?.scale.z,
                    }
                }))
            }
        }
    }

    return (
        <>
            {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
            {current && <TransformControls onChange={handleChange} object={scene.getObjectByName(current)} mode={modes[mode]} />}
            {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
            <OrbitControls makeDefault />
        </>
    )
}

export default Controls