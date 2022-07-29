import styles from '../../../styles/editor.module.css'
import Demo from './Demo'
import Publish from './Publish'

const Tools = ({draft}) => {
    return (
        <div className={styles.tools}>
            <div className={styles.container}>
                <Publish draft={draft}/>
                <Demo draft={draft} />
            </div>
        </div>
    )
}

export default Tools