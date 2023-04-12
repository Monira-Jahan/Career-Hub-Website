import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';
import JobDetails from '../JobDetails/JobDetails';

const ApplyJobs = () => {
    const applyJobs=useLoaderData();
    const handleAddToJob = id => {
         console.log(id);
    }
    return (
        <div>
            <div className='banner d-flex'>
                <img src="/images/Vector.png"/>
                <h2 className='text-center mx-5 px-5 py-5'>Applied Jobs</h2>

            </div>
            <div>
                {
                    applyJobs.map(applyJob=><JobDetails
                    key={applyJob.id}
                    applyJob={applyJob}
                    handleAddToJob={handleAddToJob}></JobDetails>)
                }
            </div>
        </div>
    );
};

export default ApplyJobs;