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
import ApplyJobs from './components/ApplyJobs/ApplyJobs';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';

const router=createBrowserRouter([
  {
     path:'/',
     element:<Home></Home>,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
      {
        path:'/',
        element:<DefaultPage></DefaultPage>,
        loader:()=>fetch('/jobCategory.json')
      },
      {
        path:'/jobdetails/:id',
        element:<JobDetails></JobDetails>,
        loader:async({params})=>{
          const res=await fetch("/featurejob.json");
          const data=await res.json();
          const jobs=data.find(job=>job.id == params.id)
          return jobs;
        }
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applyjobs',
        element:<ApplyJobs></ApplyJobs>,
        loader:()=>fetch('/featurejob.json')
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
        
      }
     ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
