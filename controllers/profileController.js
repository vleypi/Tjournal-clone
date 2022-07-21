import axios from "axios"
import nookies from 'nookies'

const errorRedirect = {
    redirect: {
        permanent: false,
        destination: "/404",
    }
}


export const getProfile = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get('http://localhost:5001/api/profile/getProfile', {
            data: {
                userid: ctx.params.userid,
                ref: cookies.ref ? cookies.ref : ''
            }
        },
        {
            withCredentials: true
        })

        return{
            props:{
                profile: res.data
            }
        }
    }
    catch(err){
        return errorRedirect
    }
}


export const getCommentsProfile = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get('http://localhost:5001/api/profile/getCommentsProfile', {
            data: {
                userid: ctx.params.userid,
                ref: cookies.ref ? cookies.ref : ''
            }
        },
        {
            withCredentials: true
        })

        return{
            props:{
                profile: res.data
            }
        }
    }
    catch(err){
        return errorRedirect
    }
}

export const getDetailsProfile = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get('http://localhost:5001/api/profile/getDetailsProfile', {
            data: {
                userid: ctx.params.userid,
                ref: cookies.ref ? cookies.ref : ''
            }
        },
        {
            withCredentials: true
        })

        return{
            props:{
                profile: res.data
            }
        }
    }
    catch(err){
        return errorRedirect
    }
}

export const getDraftsProfile = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get('http://localhost:5001/api/profile/getDraftsProfile', {
            data: {
                userid: ctx.params.userid,
                acc: cookies.acc ? cookies.acc : '',
                ref: cookies.ref ? cookies.ref : ''
            }
        },
        {
            withCredentials: true
        })

        return{
            props:{
                profile: res.data,
            }
        }
    }
    catch(err){
        return errorRedirect
    }
}

