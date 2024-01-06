import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Group, Scene } from 'three';
import TransformInput from './TransformInput/TransformInput';
import styles from './ObjectSettings.module.css'
import LigthInput from './LightInput/LightInput';

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
                        <li>
                            <h2 className={styles.input_title}>Position</h2>
                            <ul className={styles.list_of_inputs}>
                                <li><TransformInput selectedObject={selectedObject} transformType={'position'} axis='x' /></li>
                                <li><TransformInput selectedObject={selectedObject} transformType={'position'} axis='y' /></li>
                                <li><TransformInput selectedObject={selectedObject} transformType={'position'} axis='z' /></li>
                            </ul>
                        </li>
                        <li>
                            <h2 className={styles.input_title}>Rotation</h2>
                            <ul className={styles.list_of_inputs}>
                                <li><TransformInput selectedObject={selectedObject} transformType={'rotation'} axis='x' /></li>
                                <li><TransformInput selectedObject={selectedObject} transformType={'rotation'} axis='y' /></li>
                                <li><TransformInput selectedObject={selectedObject} transformType={'rotation'} axis='z' /></li>
                            </ul>
                        </li>
                        <li>
                            <h2 className={styles.input_title}>Scale</h2>
                            <ul className={styles.list_of_inputs}>
                                <li><TransformInput selectedObject={selectedObject} transformType={'scale'} axis='x' /></li>
                                <li><TransformInput selectedObject={selectedObject} transformType={'scale'} axis='y' /></li>
                                <li><TransformInput selectedObject={selectedObject} transformType={'scale'} axis='z' /></li>
                            </ul>
                        </li>

                    </ul>
                    {selectedObject && 'isGroup' in selectedObject &&
                        <ul className={styles.main_list}>
                            <li><LigthInput selectedObject={selectedObject as Group} valueToChange='intensity' /></li>
                            <li><LigthInput selectedObject={selectedObject as Group} valueToChange='distance' /></li>
                        </ul>
                    }
                </>
                : <p className={styles.object_name}>Select Object</p>
            }
        </>
    )
}

export default ObjectSettings