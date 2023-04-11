import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './DefaultPage.css'
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import FeattureJob from '../FeatureJob/FeattureJob';


const DefaultPage = () => {
    const categories = useLoaderData();
   // console.log(categories);
   const[featureJobs,setFeatureJob]=useState([]);
   useEffect(()=>{
    fetch('featurejob.json')
    .then(res=>res.json())
    .then(data=>setFeatureJob(data))
   },[])
    return (
        <div>
            <div className='banner'>
                <div className="d-md-flex fw-bolder">
                    <div className='my-sm-5 mx-5 px-lg-4 me-3'>
                        <h1 class="fs-1 fw-bolder">One Step Closer To Your</h1>
                        <h1 className="title fw-bolder fs-1"> Dream Job</h1>
                        <p className="fs-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button type="button" className="btn text-white">Get Started</button>
                    </div>
                    <img class="h-50 w-50 w-sm-100" src="./src/assets/images/P3OLGJ1.png" alt="" />
                </div>
            </div>
            {/* Job category List Seection */}
            <div>
                <h3 className="text-center pt-5 pb-2">Job Category List </h3>
                <p className='text-center pb-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='d-md-flex justify-content-between mx-5'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}>

                        </Category>)
                    }
                </div>
                {/* Featured Jobs Section */}
                <div>
                <h3 className="text-center pt-5 pb-2">Featured Jobs </h3>
                <p className='text-center pb-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='feature-jobs container ps-5'>     
                    {
                        featureJobs.map(featureJob => <FeattureJob
                            key={featureJob.id}
                            featureJob={featureJob}>
                                </FeattureJob>)
                    }
                <div className="mx-auto mb-4 text-center">
                    <a href="#" class="all-jobs btn btn-primary">See All Jobs</a>
                    </div>  
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DefaultPage;