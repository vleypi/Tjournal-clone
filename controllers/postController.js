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
                header: props.header,
                blocks: props.blocks
            }
        },{
            withCredentials: true
        })
    }
    catch(err){
        return errorRedirect
    }
}