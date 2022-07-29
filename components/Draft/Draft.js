import dynamic from "next/dynamic";
let Output = dynamic(() => import('editorjs-react-renderer'), {ssr: false});
import styles from '../../styles/draft.module.css'
import Image from 'next/image';
import bin from '../../public/bin.png'
import edit from '../../public/edit.png'
import { useRouter } from 'next/router'
import {deleteDraft} from '../../controllers/draftController'
import { useState } from "react";
import { useEffect } from "react";

const Draft = ({draft, profile}) => {
    console.log(draft)
    const router = useRouter()
    const [preloader,setPreloader] = useState(true)

    useEffect(() => {
      setPreloader(false)
    }, [Output])


    return (
        <div className={styles.draft}> 

            <div className={styles.headerContent}>
                <div className={styles.headerName} onClick={()=>router.push(`/p/${profile.userid}`)}>
                  {profile.name}
                </div>
                <div className={styles.headerSettings}>
                  <div className={styles.draftMarker}>черновик</div>
                  <button 
                    className={styles.deleteDraft}
                    onClick={()=>deleteDraft(draft.draftid,router,`/p/${profile.userid}`)}
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
                {draft.header}
              </div>
              <div className={styles.content}>
                {!preloader ?
                  <Output data={draft} /> :
                  <>
                    {draft.blocks.map(it=>(
                      <div 
                        className={styles.preloader} 
                        style={{
                          width: `${
                            it.data.text.length * 10 > 600 ? 600 : it.data.text.length * 10
                          }px`,
                        }}>
                      </div>
                    ))}
                  </>
                }
                
              </div>
        </div>
    ) 
}

export default Draft