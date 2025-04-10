import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Feed from './components/Feed.jsx'
import Requests from './components/Requests.jsx'
import Connections from './components/Connections.jsx'
import Profileupdate from './components/Profileupdate.jsx'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },{
        path:'/feed',
        element:<Feed></Feed>
      },
      {
        path:'/requests',
        element:<Requests></Requests>
      },
      {
        path:'/connections',
        element:<Connections></Connections>
      },
      {
        path:'/profile',
        element:<Profileupdate></Profileupdate>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}></RouterProvider>
)
