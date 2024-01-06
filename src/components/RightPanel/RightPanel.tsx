import { useState, FC } from 'react'
import styles from './RightPanel.module.css'
import Import from './Import/Import'
import ObjectSettings from './ObjectSettings/ObjectSettings'
import SceneSettings from './SceneSettings/SceneSettings'
import { Scene } from 'three'

type settings = 'import' | 'object' | 'scene'

interface RightPanelProps {
    scene: Scene | undefined
}

const RightPanel: FC<RightPanelProps> = ({ scene }) => {

    const [selected, setSelected] = useState<settings>('import')

    return (
        <aside className={styles.right_panel}>
            <ul className={styles.list_of_buttons}>
                <li>
                    <button
                        className={`${styles.button} ${selected === 'import' ? styles.button_active : ''}`}
                        onClick={() => setSelected('import')}>
                        Import
                    </button>
                </li>
                <li>
                    <button
                        className={`${styles.button} ${selected === 'object' ? styles.button_active : ''}`}
                        onClick={() => setSelected('object')}>
                        Object
                    </button>
                </li>
                <li>
                    <button
                        className={`${styles.button} ${selected === 'scene' ? styles.button_active : ''}`}
                        onClick={() => setSelected('scene')}>
                        Scene
                    </button>
                </li>
            </ul>
            {selected === 'import' && <Import />}
            {selected === 'object' && scene && <ObjectSettings scene={scene} />}
            {selected === 'scene' && <SceneSettings />}
        </aside>
    )
}

export default RightPanel