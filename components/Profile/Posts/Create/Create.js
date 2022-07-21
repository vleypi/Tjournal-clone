import React from 'react'
import styles from '../../../../styles/profile.module.css'
import { useSelector } from 'react-redux'

const Create = ({profile}) => {
    
    const profileRedux = useSelector(({profile})=>profile)
    const me = profile.me || profile.userid === profileRedux.userid
    
    return (
        <>
            {me &&
                <>
                    <div className={styles.profileCreatePost}>
                        <div className={styles.profileCreatePostName}>
                            {profile.name}:
                        </div>
                        <div className={styles.profileCreatePostNewPost}>
                            Новая запись
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Create