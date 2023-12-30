import { useId, FC, InputHTMLAttributes } from 'react'
import styles from'./Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
 }

const Input:FC<InputProps> = ({labelText, ...props}) => {

  const id = useId()

  return (
    <>
      <label className={styles.label} htmlFor={id}>{labelText}</label>
      <input id={id} {...props}></input>
    </>
  )
}

export default Input