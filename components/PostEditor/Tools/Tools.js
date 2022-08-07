import styles from '../../../styles/editor.module.css'
import Save from './Save'

const Tools = ({post}) => {
    return (
        <div className={styles.tools}>
            <div className={styles.container}>
                <Save post={post}/>
            </div>
        </div>
    )
}

export default Tools