import { configureStore } from "@reduxjs/toolkit";
import userReducer  from '../slice/userSlice'
import feedReducer  from '../slice/feedSlice'
import requestReducer from '../slice/requestSlice'
import connectionReducer from '../slice/connectionSlice'

const Appstore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        request:requestReducer,
        connection:connectionReducer
    }
})

export default Appstore;
