import { FC, InputHTMLAttributes, useId } from 'react'
import styles from './DefaultInput.module.css'

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
}

const DefaultInput: FC<DefaultInputProps> = ({ labelText, ...props }) => {

    const id = useId()

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>{labelText}</label>
            <input className={styles.input} id={id} {...props}></input>
        </div>
    )
}
export default DefaultInput