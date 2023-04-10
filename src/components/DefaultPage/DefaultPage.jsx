import React from 'react';
import Header from '../Header/Header';
import './DefaultPage.css'

const DefaultPage = () => {
    return (
        <div className='banner'> 
        <div className=" d-md-flex fw-bolder">
                <div className='my-sm-5 mx-5 px-lg-4 me-3'>
                    <h1 class="fs-1 fw-bolder">One Step Closer To Your</h1>
                    <h1 className="title fw-bolder fs-1"> Dream Job</h1>
                    <p className="fs-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button type="button" class="btn btn-primary">Get Started</button>                    
                </div>
                <img class="h-50 w-50 w-sm-100" src="./src/assets/images/P3OLGJ1.png" alt="" />
            </div>
            </div> 
    );
};

export default DefaultPage;