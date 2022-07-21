import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        setPosts: (state,action) =>{
            state.posts = action.payload
        },
        setLikes: (state,action) =>{
            console.log(state)
            state.posts[0].reviews = state.posts[0].reviews + 1
        },
        setDislikes: (state,action) =>{
            state.posts[0].reviews = state.posts[0].reviews - 1
        }
    },
    extraReducers: {
        [HYDRATE]: (state,action) =>{
            state.posts = action.payload.posts.posts 
        }
    }
})

export const {setPosts,setLikes,setDislikes} = postsSlice.actions

export default postsSlice.reducer