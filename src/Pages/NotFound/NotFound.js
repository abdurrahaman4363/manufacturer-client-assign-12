import React from 'react';
import notFound from '../../assets/images/notFound.jpg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='text-red-500 text-xl mt-5'>This is NotFound</h1>
            <p className='text-red-500 text-xl'>404</p>
           <div className='object-none object-center'> <img className='text-center' src={notFound} alt="" /></div>
        </div>
    );
};

export default NotFound;