import { createSlice } from "@reduxjs/toolkit";

export const postEditorSlice = createSlice({
    name: 'posteditor',
    initialState: {
        header: '',
        blocks: []
    },
    reducers: {
        setPostEditor: (state,action) =>{
            return{
                ...state,
                header: action.payload.header,
                blocks: action.payload.blocks
            }
        }
    }
})

export const {setPostEditor} = postEditorSlice.actions

export default postEditorSlice.reducer