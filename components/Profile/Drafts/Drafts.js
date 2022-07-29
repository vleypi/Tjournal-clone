import React, { useState } from 'react'
import styles from '../../../styles/profile.module.css'
import None from './None/None'
import Draft from './Draft/Draft'
import {deleteDraft} from '../../../controllers/draftController'

const Drafts = ({profile}) => {

    const drafts = profile.drafts.length ? profile.drafts.map(draft=>(
        <Draft draft={draft} profile={profile}/>
    )) : <None profile={profile}/>

    return (
            <div>
                {drafts}
            </div>
    )
}

export default Drafts 