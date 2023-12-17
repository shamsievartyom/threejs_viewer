import { OrbitControls, TransformControls } from '@react-three/drei';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useThree } from '@react-three/fiber';
import { modes } from '../../redux/slices/transformSlice';

const Controls = () => {
    const { current, mode } = useAppSelector((state) => state.transform);
    const scene = useThree((state) => state.scene)
    return (
        <>
            {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
            {current && <TransformControls object={scene.getObjectByName(current)} mode={modes[mode]} />}
            {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
            <OrbitControls makeDefault />
        </>
    )
}

export default Controls