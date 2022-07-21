import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: true
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setVisible: (state) =>{
            state.visible = !state.visible
        }
    }
})

export const {setVisible} = navSlice.actions

export default navSlice.reducer