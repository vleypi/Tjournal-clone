import React from 'react'
import styles from '../../../../styles/profile.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Create = ({profile}) => {
    
    const profileRedux = useSelector(({profile})=>profile)
    const me = profile.me || profile.userid === profileRedux.userid
    const router = useRouter()
    
    return (
        <>
            {me &&
                <>
                    <div className={styles.profileCreatePost}>
                        <div className={styles.profileCreatePostName}>
                            {profile.name}:
                        </div>
                        <div 
                            className={styles.profileCreatePostNewPost}
                            onClick={()=>router.push('/editor')}
                        >
                            Новая запись
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Create