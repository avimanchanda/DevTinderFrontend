import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/slice/userSlice'

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const checkinguserdetails=async ()=>{
    try{
      const res=await axios.get('http://localhost:3000/profile',{
        withCredentials:true
      })
      console.log(res.data)
      dispatch(addUser(res.data))
    }
   
    catch(err)
    {
      console.log(err)
      return navigate('/login')
    }
  }

  useEffect(()=>{
    checkinguserdetails();
  },[])

  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default Body