import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: 'no'
}

export const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        setVisible: (state,action) =>{
            state.visible = action.payload.type
        }
    }
})

export const {setVisible} = signinSlice.actions

export default signinSlice.reducer