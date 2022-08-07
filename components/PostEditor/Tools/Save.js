import styles from '../../../styles/editor.module.css'
import { useSelector } from 'react-redux'
import { savePostChanges } from '../../../controllers/postController'
import { useRouter } from 'next/router'
 
const Save = ({post}) => {

    const router = useRouter()
    const postSelector = useSelector(({posteditor})=>posteditor)

    const save = async () => {
        const res = await savePostChanges({
            post,
            router,
            postSelector 
        })
    }

    return (
        <button 
            className={styles.publish}
            onClick={save}
            disabled={!postSelector.header && !postSelector.blocks.length}
        >
            Сохранить
        </button>
    )
}

export default Save