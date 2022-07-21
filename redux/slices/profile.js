import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: '',
        email: '',
        userid: ''
    },
    reducers: {
        setProfile: (state,action) =>{
            state.name = action.payload.name
            state.email = action.payload.email
            state.userid = action.payload.userid
            state.token = action.payload.token
        }
    },
    extraReducers: {
        [HYDRATE]: (state,action) =>{
            state.name = action.payload.profile.name;
        }
    }
})

export const {setProfile} = profileSlice.actions

export default profileSlice.reducer