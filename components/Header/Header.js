import styles from '../../styles/header.module.css'
import Image from 'next/image'
import menu from '../../public/menu.png'
import notification from '../../public/notification-bell.png'
import Seacrh from './Seacrh'
import { useDispatch, useSelector } from 'react-redux'
import { setVisible as setNavVisible} from '../../redux/slices/nav'
import { setVisible as setSignInVisible} from '../../redux/slices/signin'
import Link from 'next/link'


const Header = () => {

    const profile = useSelector(({profile})=>profile)
    const preloader = useSelector(({preloader})=>preloader.preloader)

    const dispatch = useDispatch()

    const navHandler = () =>{
        dispatch(setNavVisible())
    }

    const signInHandler = () =>{
        dispatch(setSignInVisible({type: 'signin'}))
    }

    return (
        <div className={styles.header}>
            {!preloader &&
                <>
                    <div className={styles.menuLogo}>
                        <button className={styles.menu} onClick={navHandler}>
                            <Image src={menu}/>
                        </button>
                        <div className={styles.logo}>
                            <p>Blog</p>
                        </div>
                    </div>
                    <Seacrh/>
                    <div className={styles.notiSign}>
                        <button className={styles.notification}>
                            <Image src={notification} />
                        </button>
                        {!profile.name ?
                            <button className={styles.sigin} onClick={signInHandler}>
                                Войти
                            </button> :
                            <p>
                                <Link href={'/p/'+profile.userid}><a>{profile.name}</a></Link>
                            </p>
                        }
                    </div>
                </>
            }
        </div>
    )
}



export default Header