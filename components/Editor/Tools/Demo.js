import styles from '../../../styles/editor.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {useSelector} from 'react-redux'

const Demo = ({draft,header}) => {
    const router = useRouter()

    const draftSelector = useSelector(({editor})=>editor)

    return (
        <button 
            onClick={()=>router.push('/draft/'+draft.draftid)} 
            className={styles.demo}
            disabled={!draftSelector.header && !draftSelector.blocks.length}
        >
                Дэмо
        </button>
    )
}

export default Demo