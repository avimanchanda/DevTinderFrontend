import { createSlice } from "@reduxjs/toolkit";


const requestSlice=createSlice({
    name:"request",
    initialState:[],
    reducers:{
        addrequest(state,action){
            return action.payload
        },
        removerequest(state){
            return null
        },
        deleteOnerequest(state,action){
            const newrequest=state.filter(obj=>obj._id!==action.payload)
            return newrequest
        }
    }
})

export default requestSlice.reducer;

export const {addrequest,removerequest,deleteOnerequest}=requestSlice.actions;