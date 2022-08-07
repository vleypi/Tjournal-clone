import styles from '../../../styles/editor.module.css'
import { useSelector } from 'react-redux'
import { publishPost } from '../../../controllers/postController'
import { useRouter } from 'next/router'
 
const Publish = ({draft}) => {

    const router = useRouter()
    const draftSelector = useSelector(({editor})=>editor)

    const publish = async () => {
        const res = await publishPost({
            draft,
            router
        })
    }

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