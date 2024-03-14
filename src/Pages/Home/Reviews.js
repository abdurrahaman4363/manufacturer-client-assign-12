import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
         fetch('http://localhost:5000/review')
         .then(res => res.json())
         .then(data =>{
            //   console.log(data);
              setReviews(data.reverse());
            })
    },[])
    return (
        <div className=''>
            <h1 className='text-xl text-center my-10 font-bold text-purple-500'>Reviews : {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map( review => <Review 
                        key={review._id}
                        review={review}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;