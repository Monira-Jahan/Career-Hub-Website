import React from 'react';
import './Category.css'
const Category = ({category}) => {
    const{id,logo,category_name,available_jobs}=category;
    return (
        <div>
            
            <div className='category border border-white px-5 py-3 rounded'>
                <img src={logo} />
               <h6 className='pt-4'>{category_name}</h6>
               <p className=''>{available_jobs}</p>
            </div>
        </div>
    );
};

export default Category;