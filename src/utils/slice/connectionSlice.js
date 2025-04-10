import { createSlice } from "@reduxjs/toolkit";


const connectionSlice=createSlice({
    name:"connection",
    initialState:[],
    reducers:{
        addConnection(state,action){
            return action.payload
        },
        
            removeConnection(state){
                return [];
            }
        
    }
})

export default connectionSlice.reducer;
export const {addConnection,removeConnection}=connectionSlice.actions;

