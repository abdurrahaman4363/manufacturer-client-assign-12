import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    const {name, email, ratings,description} = review;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Email: {email}</p>
                <p>Ratings: {ratings}</p>
                <p>Description: {description}</p>
            </div>
        </div>
    );
};

export default Review;