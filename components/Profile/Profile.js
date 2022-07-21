import styles from '../../styles/profile.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { memo, useState } from 'react'

const Profile = memo(({profile}) => {

    const router = useRouter()
    const profileRedux = useSelector(({profile})=>profile)
    const me = profile.me || profile.userid === profileRedux.userid
    const reg = new Date(profile.registered)

    const routes = [
        {name: 'Статьи', path: '/p/' + profile.userid,visible: true},
        {name: 'Комментарии', path: '/p/' + profile.userid + '/comments', visible: true},
        {name: 'Черновики', path: '/p/' + profile.userid + '/drafts', visible: me},
        {name: 'Подробнее', path: '/p/' + profile.userid + '/details',visible: true},
    ]


    return (
        <div className={styles.profile}> 
            <div className={styles.profileMain}>
                <div className={styles.profileName}>
                    {profile.name}
                </div>
                <div className={styles.profileRule}>
                    <button className={styles.settings}>
                        Settings
                    </button>
                    <button className={styles.write}>
                        Написать
                    </button>
                    {!me &&
                        <button className={styles.follow}>
                            Подписаться
                        </button>
                    }
                </div>
            </div>
            <div className={styles.description}>
                {profile.description &&
                    <div>
                        {profile.description}
                    </div>
                }
                {me &&
                    <button>
                        Изменить описание
                    </button>
                }
            </div>
            <div className={styles.registered}>
                На проекте с {reg.getDate() + ' июл ' + reg.getFullYear()}
            </div>
            <div className={styles.tabs}>
                {routes.map((route,index)=>
                    <>
                        {route.visible &&
                            <button 
                                disabled={router.asPath === route.path}
                                onClick={()=>router.push(route.path)} 
                                className={router.asPath === route.path && styles.active}
                            >
                                <p>{route.name}</p>
                            </button>
                        }
                    </>
                )}
            </div>
        </div>
    )
})

export default Profile