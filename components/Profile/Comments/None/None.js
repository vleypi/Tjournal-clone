import React from 'react'
import styles from '../../../../styles/profile.module.css'
import { useSelector } from 'react-redux'

const None = ({profile}) => {
    
    const profileRedux = useSelector(({profile})=>profile)
    const me = profile.me || profile.userid === profileRedux.userid
    
    return (
        <div className={styles.profileNone}>
            {me ?
                <>
                    <div className={styles.profileNoneSuggestion}>
                        Вы еще не оставили ни одного комментария
                    </div>
                </> :
                <>
                    <div className={styles.profileNoneSuggestion}>
                        Пользователь еще не оставлял ни одного комментария
                    </div>
                </>
            }
        </div>
    )
}

export default None