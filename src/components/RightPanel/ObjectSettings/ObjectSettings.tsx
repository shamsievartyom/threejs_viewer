import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Scene } from 'three';
import TransformInput from './TransformInput/TransformInput';
import styles from './ObjectSettings.module.css'

type ObjectSettingsProps = {
    scene: Scene
}

const ObjectSettings: FC<ObjectSettingsProps> = ({ scene }) => {

    let { current } = useAppSelector((state) => state.transform);
    if (!current) current = "";

    const selectedObject = scene.getObjectByName(current);

    return (
        <>
            {current !== '' ?
                <>
                    <h1 className={styles.object_name}>{selectedObject?.name}</h1>
                    <ul className={styles.main_list}>
                        <h2 className={styles.input_title}>Position</h2>
                        <ul className={styles.list_of_inputs}>
                            <li><TransformInput selectedObject={selectedObject} transformType={'position'} axis='x' /></li>
                            <li><TransformInput selectedObject={selectedObject} transformType={'position'} axis='y' /></li>
                            <li><TransformInput selectedObject={selectedObject} transformType={'position'} axis='z' /></li>
                        </ul>
                        <h2 className={styles.input_title}>Rotation</h2>
                        <ul className={styles.list_of_inputs}>
                            <li><TransformInput selectedObject={selectedObject} transformType={'rotation'} axis='x' /></li>
                            <li><TransformInput selectedObject={selectedObject} transformType={'rotation'} axis='y' /></li>
                            <li><TransformInput selectedObject={selectedObject} transformType={'rotation'} axis='z' /></li>
                        </ul>
                        <h2 className={styles.input_title}>Scale</h2>
                        <ul className={styles.list_of_inputs}>
                            <li><TransformInput selectedObject={selectedObject} transformType={'scale'} axis='x' /></li>
                            <li><TransformInput selectedObject={selectedObject} transformType={'scale'} axis='y' /></li>
                            <li><TransformInput selectedObject={selectedObject} transformType={'scale'} axis='z' /></li>
                        </ul>
                    </ul>
                </>
                : <p>Select Object</p>
            }
        </>
    )
}

export default ObjectSettings