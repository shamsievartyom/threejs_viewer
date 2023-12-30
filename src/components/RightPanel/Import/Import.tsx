import FileUploader from '../../FileUploader/FileUploader'
import styles from './Import.module.css'

const Import = () => {
    return (
        <>
            <h1 className={styles.description}>Select format</h1>
            <FileUploader />
        </>
    )
}

export default Import