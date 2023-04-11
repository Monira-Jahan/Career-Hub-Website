import React from 'react';
import './FeatureJob.css'

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
                <button className="btn bg-none ">{job_type}</button>
                <button className="btn mx-2">{job_time}</button>
               </div>
               <div className='d-flex '>
                <p className=''>{location}</p>
                <p className='mx-2'>Salary:{salary}</p>
               </div>
               <a href="#" class="btn btn-primary">View Details</a>
            </div>
        </div>
        </div>
    );
};

export default FeattureJob;