import { FC, useState } from 'react'
import { Group, PointLight } from 'three';
import DefaultInput from '../../../DefaultInput/DefaultInput';

interface LightInputProps {
    selectedObject: Group,
    valueToChange: 'intensity' | 'distance',
}

const LightInput: FC<LightInputProps> = ({ selectedObject, valueToChange }) => {

    const pointLigth = selectedObject.children[0] as PointLight //say to TS that object is only PointLight

    const [inputValue, setInputValue] = useState<number>(pointLigth[valueToChange]);

    return (
        <DefaultInput
            labelText={valueToChange.charAt(0).toUpperCase() + valueToChange.slice(1)}
            type='number'
            value={inputValue}
            onChange={(el) => {
                if (selectedObject.position) {
                    const newValue = Number(el.currentTarget.value);
                    setInputValue(newValue);
                    pointLigth[valueToChange] = newValue;
                }
            }}
        />
    )
}

export default LightInput