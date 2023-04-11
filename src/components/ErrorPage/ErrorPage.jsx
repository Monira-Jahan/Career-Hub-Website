import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div>
            <h1>404</h1>
            <h3>Page Not Found!</h3>
        </div>
    );
};

export default ErrorPage;