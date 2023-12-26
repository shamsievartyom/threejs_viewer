import { useState } from 'react'
import styles from './RightPanel.module.css'
import Import from './Import/Import'
import OjbjectSettings from './ObjectSettings/OjbjectSettings'

type settings = 'import' | 'object'

const RightPanel = () => {

    const [selected, setSelected] = useState<settings>('import')

    return (
        <aside className={styles.right_panel}>
            <ul>
                <li><button onClick={()=>setSelected('import')}>Import</button></li>
                <li><button onClick={()=>setSelected('object')}>Object</button></li>
            </ul>
            {selected === 'import' && <Import />}
            {selected === 'object' && <OjbjectSettings />}
        </aside>
    )
}

export default RightPanel