import axios from 'axios'
import nookies from 'nookies'

const errorRedirect = {
    redirect: {
        permanent: false,
        destination: "/404",
    }
}

export const saveDraft = async (props) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/draft/saveDraft', {
            data: {
                outputData: props.outputData,
                header: props.header,
                draftid: props.draft.draftid
            }
        },{
            withCredentials: true
        })
    }
    catch(err){
        return errorRedirect
    }
}

export const getDraft = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get('http://localhost:5001/api/draft/getDraft', {
            data: {
                acc: cookies.acc,
                ref: cookies.ref
            }
        },{
            withCredentials: true
        })
        
        return{
            redirect: {
                permanent: false,
                destination: "/editor/"+res.data.draftid,
            }
        }
    }
    catch(err){
        return errorRedirect
    }
}

export const getDraftById = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get('http://localhost:5001/api/draft/getDraftById', {
            data: {
                acc: cookies.acc,
                ref: cookies.ref,
                draftid: ctx.params.draftid
            }
        },{
            withCredentials: true
        })


        return{
            props: {
                draft: res.data.draft
            }
        }
    }
    catch(err){
        return errorRedirect
    }
}

export const deleteDraft = async (draftid, reload,path) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/draft/deleteDraft', {
            data: {
                draftid
            }
        },{
            withCredentials: true
        })

        return reload.replace(path)
    }
    catch(err){
        return errorRedirect
    }
}

export const getDraftPageById = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get('http://localhost:5001/api/draft/getDraftPageById', {
            data: {
                acc: cookies.acc,
                ref: cookies.ref,
                draftid: ctx.params.draftid
            }
        },{
            withCredentials: true
        })
        
        return{
           props: {
                draft: res.data.draft,
                profile: res.data.profile
           }
        }
    }
    catch(err){
        return errorRedirect
    }
}