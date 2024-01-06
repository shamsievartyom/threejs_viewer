import { FC, useEffect, useState } from 'react'
import { Object3D } from 'three';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import styles from './TransformInput.module.css'

type AxisType = 'x' | 'y' | 'z'

interface TransformInputProps {
    selectedObject: Object3D | undefined,
    transformType: 'position' | 'rotation' | 'scale',
    axis: AxisType
}

const TransformInput: FC<TransformInputProps> = ({ selectedObject, transformType, axis }) => {

    const transform = useAppSelector((state) => state.transform.transform)
    const { current } = useAppSelector((state) => state.transform)

    useEffect(() => {
        if (selectedObject) {
            if (transformType === 'rotation') setInputValue(selectedObject[transformType][axis] * 180 / Math.PI);
            else setInputValue(selectedObject[transformType][axis]);
        }
    }, [current, transform]);

    const [inputValue, setInputValue] = useState<number>(0);

    const addUpperCase = (axis: AxisType): 'X' | 'Y' | 'Z' => {
        if (axis === 'x') return "X"
        else if (axis === 'y') return "Y"
        return "Z"
    }

    return (
        <div className={styles.input_container}>
            <span>{axis}</span>
            <input
                className={styles.input}
                type='number'
                value={inputValue}
                onChange={(el) => {
                    if (selectedObject?.position) {
                        const newValue = Number(el.currentTarget.value);
                        setInputValue(newValue);
                        if (transformType === 'rotation') selectedObject[transformType][axis] = newValue / 180 * Math.PI;
                        else
                            selectedObject[transformType][`set${addUpperCase(axis)}`](newValue);
                    }
                }}
            />
        </div>
    )
}

export default TransformInput