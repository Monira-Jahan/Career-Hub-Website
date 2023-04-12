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
          <h2 className='mb-8 fw-extrabold fs-1'>
            <img src="./images/error.jpg"/>
           <h1 className="pb-3"> <span className='pb-3 sr-only'>Error</span> {status || 404}</h1>
          </h2>
          <h3>PAGE NOT FOUND</h3>
          <p className='fs-2 font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <br></br>
          <Link
            to='/'
            className='my-4 px-5 py-3 fw-bold rounded bg-primary text-light'
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