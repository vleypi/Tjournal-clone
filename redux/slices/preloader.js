import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

export const preloaderSlice = createSlice({
    name: 'profile',
    initialState: {
        preloader: true,
    },
    reducers: {
        setPreloader: (state,action) =>{
            state.preloader = action.payload.preloader
        }
    }
})

export const {setPreloader} = preloaderSlice.actions

export default preloaderSlice.reducer