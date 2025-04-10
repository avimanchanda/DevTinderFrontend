
import { createSlice } from "@reduxjs/toolkit";


const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addfeed(state,action){
            return action.payload
        },
        removefeed(state){
            return null
        },
        deleteOneFeed(state,action){
            const newfeed=state.filter(obj=>obj._id!==action.payload)
            return newfeed
        }
    }
})

export default feedSlice.reducer;

export const {addfeed,removefeed,deleteOneFeed}=feedSlice.actions;