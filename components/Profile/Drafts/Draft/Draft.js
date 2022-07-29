import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../../../styles/profile.module.css'
import dynamic from "next/dynamic";
import Image from 'next/image';
import bin from '../../../../public/bin.png'
import edit from '../../../../public/edit.png'
import {deleteDraft} from '../../../../controllers/draftController'
let Output = dynamic(() => import('editorjs-react-renderer'), {ssr: false});

const Draft = ({draft,profile}) => {

    const router = useRouter()

    return (
          <div 
            className={styles.draft}
          >
              <div className={styles.headerContent}>
                <div className={styles.headerName}>
                  {profile.name}
                </div>
                <div className={styles.headerSettings}>
                  <div className={styles.draftMarker}>черновик</div>
                  <button 
                    className={styles.deleteDraft}
                    onClick={()=>deleteDraft(draft.draftid,router,router.asPath)}
                  >
                    <Image src={bin} className={styles.deleteDraftImg} width="15" height="15"/>
                  </button>
                  <button 
                    className={styles.editDraft}
                    onClick={()=>router.push('/editor/'+draft.draftid)}
                  >
                    <Image src={edit} className={styles.editDraftImg} width="18" height="18"/>
                  </button>
                </div>
              </div>
              <div 
                className={styles.draftsHeader}
                onClick={()=>router.push('/draft/'+draft.draftid)}
              >
                {draft.header ? draft.header : 'Заголовок...'}
              </div>
          </div>
    )
}

export default Draft
