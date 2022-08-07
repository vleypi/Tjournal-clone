import styles from '../../styles/post.module.css'
import Image from 'next/image'
import comments from '../../public/comments.png'
import arrow from '../../public/arrow-up.png'


const Post = ({news}) => {


    return (
        <div className={styles.post}>
            <div className={styles.contentHeader}>
                <div className={styles.postInfo}>
                    <p className={styles.author}>{news.author}</p>
                    <p className={styles.published}>{news.published}</p>
                </div>
                <button className={styles.subscribe}>Подписаться</button>
            </div>
            <div className={styles.title}>
                <p>{news.title}</p>
            </div>
            <div className={styles.text}>
                <p>{news.text}</p>
            </div>
            <div className={styles.stats}>
                <div className={styles.comments}>
                    <button>
                        <Image src={comments} />
                    </button>
                    <p>{news.comments}</p>
                </div>
                <div className={styles.reviews}>
                    <button className={styles.reviewsDown}>
                        <Image src={arrow} />
                    </button>           
                    <p>{news.reviews}</p>
                    <button className={styles.reviewsUp}>
                        <Image src={arrow} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post