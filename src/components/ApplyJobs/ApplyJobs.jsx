import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';

const ApplyJobs = () => {
    const applyJobs=useLoaderData();

    return (
        <div>
            <div className='banner d-flex'>
                <img src="src/assets/images/vector.png"/>
                <h2 className='text-center mx-5 px-5 py-5'>Applied Jobs</h2>

            </div>
            <div>
                {
                    applyJobs.map(applyJob=><ApplyJob
                    key={applyJob.id}
                    applyJob={applyJob}></ApplyJob>)
                }
            </div>
        </div>
    );
};

export default ApplyJobs;