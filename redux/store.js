
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import profileSlice from './slices/profile'
import signinSlice from './slices/signin'
import navSlice from './slices/nav'
import  postsSlice from './slices/posts'
import preloaderSlice from './slices/preloader'
import  editorSlice from './slices/editor'
import  postEditorSlice  from './slices/posteditor'


const makeStore = () => configureStore({
    reducer: {
        profile: profileSlice,
        signin: signinSlice,
        nav: navSlice,
        posts: postsSlice,
        preloader: preloaderSlice,
        editor: editorSlice,
        posteditor: postEditorSlice
    },
    devTools: true
})

export const wrapper = createWrapper(makeStore)