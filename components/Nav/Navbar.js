import styles from '../../styles/nav.module.css'
import Image from 'next/image'

import hot from '../../public/hot.png'
import latest from '../../public/time-left.png'
import list from '../../public/list.png'

import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const router = useRouter()

    const handleClick = (e,href) => {
        e.preventDefault()
        router.push(href)
    }

    const visible = useSelector(({nav})=>nav.visible)

    return (
        <>
            {visible &&
                <div className={styles.navbar}>
                    <button 
                        className={`${styles.link} ${router.pathname == "/" ? styles.active : ""}`} 
                        onClick={(e)=>handleClick(e,'/')}
                    > 
                        <Image src={hot} className={styles.image} width="24" height="24" priority/>
                        <p>Популярное</p>
                    </button>
                    <button 
                        className={`${styles.link} ${router.pathname == "/lates" ? styles.active : ""}`} 
                        onClick={(e)=>handleClick(e,'/lates')}
                    >
                        <Image src={latest} className={styles.image} width="24" height="24"/>
                        <p>Свежее</p>
                    </button>
                    <button 
                        className={`${styles.link} ${router.pathname == "/subs" ? styles.active : ""}`} 
                        onClick={(e)=>handleClick(e,'/subs')}
                    > 
                        <Image src={list} className={styles.image} width="24" height="24"/>
                        <p>Подписки</p>
                    </button>
                </div>
            }
        </>
    )
}

export default Navbar