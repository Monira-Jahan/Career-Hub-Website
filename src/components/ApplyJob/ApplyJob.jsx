import React from 'react';

const ApplyJob = ({applyJob}) => {
    const{id,image,job_title,company_name,job_type,job_time,location,salary}=applyJob;
    return (
        <div>
           <div className='col' >
            <div className='card h-100 mx-5 my-3 bg-light'>
            <div className='d-flex gap-3 align-items-center justify-content-between px-4 card-body'>
                <div>
               <img src={image} />
               <h6 className='pt-4'>{job_title}</h6>
               <p className=''>{company_name}</p>
               <div class="button">
                <button className="rounded border-2 border-primary text-primary bg-white">{job_type}</button>
                <button className="rounded border-2 border-primary text-primary bg-white mx-2">{job_time}</button>
               </div>
               <div className='d-flex pt-3'>
                <p className=''>{location}</p>
                <p className='mx-2'>Salary:{salary}</p>
               </div>
               </div>
               <div>
               <a href="#" class="btn btn-primary">View Details</a>
               </div>
            </div>
        </div>
        
        </div> 
        </div>
    );
};

export default ApplyJob;