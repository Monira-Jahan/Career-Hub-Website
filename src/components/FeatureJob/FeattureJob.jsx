import React from 'react';
import './FeatureJob.css'
import { Link,useNavigate } from 'react-router-dom';

const FeattureJob = ({featureJob}) => {
    const{id,image,job_title,company_name,job_type,job_time,location,salary}=featureJob;
    
    return (
        <div className='col' >
            <div className='card h-100'>
            <div className='px-4 card-body'>
               <img src={image} />
               <h6 className='pt-4'>{job_title}</h6>
               <p className=''>{company_name}</p>
               <div class="button">
                <button className="rounded border-2 border-primary text-primary bg-white">{job_type}</button>
                <button className="rounded border-2 border-primary text-primary bg-white mx-2">{job_time}</button>
               </div>
               <div className='location d-flex pt-3'>
               <img src="/Icons/Frame-4.png"/>
                <p className=''>{location}</p>
                <img className="" src="/Icons/Frame.png"/>
                <p className='mx-2'>Salary:{salary}</p>
               </div>
               <Link to={`jobdetails/${id}`} class="btn btn-primary">View Details</Link>
            </div>
        </div>
        
        </div>
    );
};

export default FeattureJob;