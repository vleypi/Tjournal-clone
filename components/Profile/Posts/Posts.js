import React from 'react'
import Create from './Create/Create'
import Post from './Post/Post'
import styles from '../../../styles/profile.module.css'
import None from './None/None'

const Posts = ({profile}) => {

    const posts = profile.posts.length ? profile.posts.map(post=>{
        <Post post={post} profile={profile}/>
    }) : <None profile={profile}/>

    return (
            <div>
                <Create profile={profile}/>
                {posts}
            </div>
    )
}

export default Posts