import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import DefaultPage from './components/DefaultPage/DefaultPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router=createBrowserRouter([
  {
     path:'/',
     element:<Home></Home>,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
      {
        path:'/',
        element:<DefaultPage></DefaultPage>,
        loader:()=>fetch('jobCategory.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
     ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
