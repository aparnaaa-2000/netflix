import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState={
    viewstate:[]
}
export const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        incrementbyAmount:(state,actions)=>{
            state.viewstate = actions.payload
        },
    },

})
export const {incrementbyAmount} =searchSlice.actions
export default searchSlice.reducer