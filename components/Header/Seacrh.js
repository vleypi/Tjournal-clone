import { useState } from "react"
import { useRouter } from "next/router"
import styles from '../../styles/header.module.css'

const Seacrh = () => {

    const router = useRouter()

    return (
        <div className={styles.searchCreate}>
            <input 
                placeholder='Поиск' 
                className={styles.search}
            />
            <button 
                className={styles.create}
                onClick={()=>router.push('/editor')}
            >
                Создать
            </button>
        </div>
    )
}

export default Seacrh