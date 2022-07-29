import React from 'react'
import styles from '../../../../styles/profile.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const None = ({profile}) => {
    
    const profileRedux = useSelector(({profile})=>profile)
    const me = profile.me || profile.userid === profileRedux.userid
    const router = useRouter()
    
    return (
        <div className={styles.profileNone}>
            <div className={styles.profileNoneSuggestion}>
                Напишите первую статью, чтобы привлечь читателей в ваш блог
            </div>
            <button onClick={()=>router.push('/editor')}>
                Создать запись
            </button>
        </div>
    )
}

export default None