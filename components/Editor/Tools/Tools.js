import styles from '../../../styles/editor.module.css'
import Demo from './Demo'
import Publish from './Publish'

const Tools = () => {
    return (
        <div className={styles.tools}>
            <div className={styles.container}>
                <Publish />
                <Demo />
            </div>
        </div>
    )
}

export default Tools