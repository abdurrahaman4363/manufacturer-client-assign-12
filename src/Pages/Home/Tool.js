import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const {_id, name, img, description, minimumQuantity,availableQuantity,price} = tool;
    

    const navigate = useNavigate();
    const navigateToPurchasePage = id =>{
        navigate(`/purchasePage/${id}`)
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-6">
        <img style={{height:'300px'}} className='rounded' src={img} alt="" />
            <div class="card-body">
                {/*<img style={{height:'100%'}} className='rounded' src={img} alt="" />*/}
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <h1>Minimum Quantity : <span className='text-xl text-secondary font-bold'>{minimumQuantity}</span></h1>
                <h1>available Quantity : <span className='text-xl text-secondary font-bold'>{availableQuantity}</span></h1>
                <button onClick={()=>navigateToPurchasePage(_id)} className='btn btn-dark'>Purchase Tool</button>
            </div>
        </div>
    );
};

export default Tool;