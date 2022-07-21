import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../../../styles/profile.module.css'




const Draft = ({draft}) => {
    const router = useRouter()
    return (
          <div 
            onClick={()=>router.push('/editor/'+draft.draftid)}
            className={styles.draft}
          >
              {draft.header}
          </div>
    )
}

export default Draft