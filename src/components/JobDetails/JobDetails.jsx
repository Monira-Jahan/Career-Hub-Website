import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams,useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import { Link } from 'react-router-dom';



const JobDetails = () => {
    
    
    const jobDetails=useLoaderData();
    console.log(jobDetails);
    return (
        <div>
            {/* <div className='banner d-flex'>
                <img src="/images/Vector.png"/>
                <h2 className='text-center mx-5 px-5 py-5'>Applied Jobs</h2>

            </div> */}
            <div className="d-flex">
            <div className= 'container pt-5 p-5'>
           <p><strong>Job Description:</strong> {jobDetails.description}</p>
           <p><strong>Job Responsibility:</strong> {jobDetails.responsibility}</p>
           <p><strong>Educational Requirements:</strong> 
           <br></br>{jobDetails.educational_requirements}</p>
           <p><strong>Experience:</strong> <br></br>{jobDetails.experience}</p>
           
            
            </div>
            <div>
            <div className='container info px-5 m-5'>
              <h5 className='pt-5'>Job Details</h5>
              <hr></hr>
              <div className='d-flex'>
              <img src="/Icons/Frame.png"/>
              <p><strong>Salary:</strong> {jobDetails.salary}</p>
  
              </div>
              <div className="d-flex">
              <img src="/Icons/Frame-1.png"/>
              <p><strong>Job Title:</strong> {jobDetails.job_title}</p>
              </div>
              <h5 className='pt-3'>Contact Information</h5>
              <hr></hr>
              <div className='d-flex'>
              <img src="/Icons/Frame-2.png"/>
              <p><strong>Phone:</strong> {jobDetails.phone}</p>
  
              </div>
              <div className="d-flex">
              <img src="/Icons/Frame-3.png"/>
              <p><strong>Email:</strong> {jobDetails.email}</p>
              </div>
              <div className="d-flex">
              <img src="/Icons/Frame-4.png"/>
              <p><strong>Address:</strong> {jobDetails.location}</p>
              </div>
            </div>
            <Link to="" className="apply btn btn-primary">Apply Now</Link>
            </div>
            
            </div>
            

             
        </div>
    );
};

export default JobDetails;