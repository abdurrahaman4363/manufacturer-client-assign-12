import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    const { purchasePageId } = useParams();

    const [purchase, setPurchase] = useState({});
    // const quantity = inventory.quantity
    // console.log(quantity)
    useEffect(() => {
        const url = `http://localhost:5000/tool/${purchasePageId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));
    }, [purchasePageId]);

    ///////////////////////////////
    const handleAddItem = event => {
        event.preventDefault();
        const  order = event.target.ratings.value;
        const addItem = {
            name: user.displayName,
            email: user.email,
            description: event.target.description.value,
            order: event.target.order.value,
        }
        
        if(order > -1 && order <6 ){
            axios.post('http://localhost:5000/', addItem)

            .then(Response => {
                const { data } = Response;
                if (data.insertedId) {
                    console.log(data)
                    
                    toast('Review is added!!!')
                    event.target.reset();
                }
            })
        }
        else{
            toast('ratings is not valid!!!')
            
        }

    }
    return (
        <div>
            
            <div class="  bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
            <div class="card-body">
                <img src={purchase.img} alt="" />
                <h2 class="card-title">{purchase.name}</h2>
                <p>{purchase.description}</p>
                <p>Price: {purchase.price}</p>
                <h1>Minimum Quantity : <span className='text-xl text-secondary font-bold'>{purchase.minimumQuantity}</span></h1>
                <h1>available Quantity : <span className='text-xl text-secondary font-bold'>{purchase.availableQuantity}</span></h1>
            </div>
            
            <div class="hero bg-base-200">
                
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-xl text-primary font-bold'>Order A Tool</h2>
                        <form onSubmit={handleAddItem} className='register'>
                            <input type="text" name="name" value={user?.displayName} placeholder="Type here" class="input input-bordered w-full max-w-xs my-3" />
                            <input type="email" value={user?.email} name="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <textarea class="textarea textarea-bordered w-full max-w-xs my-2" name="description" placeholder="Write Description"></textarea>
                            <input className='input input-bordered w-full max-w-xs mb-3' type="number" name="order" placeholder='Order Quantity' id="" /><br />                            
                            <input className='w-full max-w-xs text-primary uppercase font-bold' type="submit" value="Order" />
                             
                        </form>
                        
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default PurchasePage;