import dynamic from "next/dynamic";
let Output = dynamic(() => import('editorjs-react-renderer'), {ssr: false});
import styles from '../../../../styles/profile.module.css'
import Image from 'next/image';
import bin from '../../../../public/bin.png'
import edit from '../../../../public/edit.png'
import comments from '../../../../public/comments.png'
import arrow from '../../../../public/arrow-up.png'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { deletePost } from "../../../../controllers/postController";

const Post = ({post,profile}) => {

  const router = useRouter()
  const profileRedux = useSelector(({profile})=>profile)
  const me = profile.me || profile.userid === profileRedux.userid

  return (
      <div 
        className={styles.post}
      >
        <div className={styles.headerContent}>
          <div className={styles.headerName}>
            {profile.name}
          </div>
          {me &&
            <div className={styles.headerSettings}>
              <button 
                className={styles.deletePost}
                onClick={()=>deletePost({post,router})}
              >
                <Image src={bin} className={styles.deletePostImg} width="15" height="15"/>
              </button>
              <button 
                className={styles.editPost}
                onClick={()=>router.push('/')}
              >
                <Image src={edit} className={styles.editPostImg} width="18" height="18"/>
              </button>
            </div>
          }
        </div>
        <div className={styles.postContent}>
          {post.header && <h3>{post.header}</h3>}
          <Output data={post} />
        </div>
        <div className={styles.stats}>
            <div className={styles.comments}>
                <button>
                    <Image src={comments} />
                </button>
                <p>{post.comments.length}</p>
              </div>
              <div className={styles.reviews}>
                  <button className={styles.reviewsDown}>
                      <Image src={arrow} />
                  </button>           
                  <p>{post.reviews.length}</p>
                  <button className={styles.reviewsUp}>
                      <Image src={arrow} />
                  </button>
              </div>
          </div>
      </div>
  )
}

export default Post