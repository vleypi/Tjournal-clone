import React from 'react'
import Comment from './Comment/Comment'
import styles from '../../../styles/profile.module.css'
import None from './None/None'

const Comments = ({profile}) => {   

    console.log(profile)
    const comments = profile.comments.length ? profile.comments.map(comment=>{
        <Comment comment={comment} profile={profile}/>
    }) : <None profile={profile}/>

    return (
            <div>
                {comments}
            </div>
    )
}

export default Comments