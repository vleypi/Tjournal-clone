import { createSlice } from "@reduxjs/toolkit";

export const editorSlice = createSlice({
    name: 'draft',
    initialState: {
        header: '',
        blocks: []
    },
    reducers: {
        setDraft: (state,action) =>{
            return{
                ...state,
                header: action.payload.header,
                blocks: action.payload.blocks
            }
        }
    }
})

export const {setDraft,setHeader,setBlocks} = editorSlice.actions

export default editorSlice.reducer