import { ChangeEvent, FC, useId } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addObject } from '../../redux/slices/upoadSlice';
import styles from './FileUploader.module.css'

const FileUploader: FC = () => {

    const dispatch = useAppDispatch()
    
    const id = useId()

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            dispatch(addObject(URL.createObjectURL(file)))
        }
    };

    return (
        <div className={styles.container}>
            <label htmlFor={id} className={styles.label}>FBX</label>
            <input className={styles.input} id={id} type="file" accept='.fbx' onChange={handleFileChange} />
        </div>
    );
}

export default FileUploader