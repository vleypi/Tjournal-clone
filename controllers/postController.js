import axios from 'axios'
import nookies from 'nookies'

const errorRedirect = {
    redirect: {
        permanent: false,
        destination: "/404",
    }
}



export const publishPost = async (props) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/post/publishPost', {
            data: {
                draft: props.draft
            }
        },{
            withCredentials: true
        })
        props.router.replace('/')
    }
    catch(err){
        return errorRedirect
    }
}

export const deletePost = async (props) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/post/deletePost', {
            data: {
                post: props.post,
            }
        },{
            withCredentials: true
        })
        props.router.replace(props.router.asPath)
    }
    catch(err){
        return errorRedirect
    }
}