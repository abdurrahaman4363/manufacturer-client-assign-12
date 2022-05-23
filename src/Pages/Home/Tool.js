import React from 'react';

const Tool = ({ tool }) => {
    const {name, img, description, minimumQuantity,availableQuantity,price} = tool;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <img src={img} alt="" />
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <h1>Minimum Quantity : <span className='text-xl text-secondary font-bold'>{minimumQuantity}</span></h1>
                <h1>available Quantity : <span className='text-xl text-secondary font-bold'>{availableQuantity}</span></h1>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary text-white uppercase">Purchase Tool</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;