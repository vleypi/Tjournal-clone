import styles from '../../../styles/editor.module.css'
import { useSelector } from 'react-redux'
import { publishPost } from '../../../controllers/postController'
import { useEffect } from 'react'

const Publish = ({draft}) => {

    const draftSelector = useSelector(({editor})=>editor)

    const publish = async () => {
        await publishPost({
            header: draftSelector.header,
            blocks: draftSelector.blocks
        })
    }

    useEffect(()=>{
        console.log(2)
    },[draftSelector.blocks, draftSelector.header])

    return (
        <button 
            className={styles.publish}
            onClick={publish}
            disabled={!draftSelector.header && !draftSelector.blocks.length}
        >
            Опубликовать
        </button>
    )
}

export default Publish