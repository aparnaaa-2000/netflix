import { configureStore } from '@reduxjs/toolkit'
import searchRed from './movie'
// import newRed from './news'




export const store = configureStore({
    reducer:{
        search:searchRed
    },
})