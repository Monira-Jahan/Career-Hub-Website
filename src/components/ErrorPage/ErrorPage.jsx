import React from 'react';
import { Link,useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } =useRouteError();
    console.log(error);
    return (
        <div>
            <section className='d-flex align-items-center py-5 px-5 my-5 bg-gray-100 text-gray-900'>
      <div className='container px-5 mx-5 py-5 '>
        
        <div className='max-w-md text-center'>
          <h2 className='mb-8 fw-extrabold fs-1 text-gray-600'>
           <h1> <span className='sr-only'>Error</span> {status || 404}</h1>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;