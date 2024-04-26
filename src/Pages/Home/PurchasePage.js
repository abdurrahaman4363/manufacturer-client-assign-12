import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    const { purchasePageId } = useParams();

    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tool/${purchasePageId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));
    }, [purchasePageId]);

    ///////////////////////////////
    const handleAddItem = event => {
        event.preventDefault();
        const  order = event.target.order.value;
        const minimumQuantity= purchase.minimumQuantity
        const availableQuantity = purchase.availableQuantity
        const orders = {
            name: user.displayName,
            email: user.email,
            toolName: event.target.toolName.value,
            Address: event.target.Address.value,
            order: event.target.order.value,
            phone: event.target.phone.value,
            price: event.target.price.value,
        }
        if(order >= minimumQuantity && order <= availableQuantity ){
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('Order is successful')
            event.target.reset();
        })
    }
    else{
        toast('Order is not valid!!!')
        
    }

    }
    return (
        <div className='mt-24 mb-20'>
            
            <div class="  bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
            <div class="card-body">
                <img style={{height:'300px'}} src={purchase.img} alt="" />
                <h2 class="card-title">{purchase.name}</h2>
                <p>{purchase.description}</p>
                <p>Price: {purchase.price}</p>
                {/* <p>Order: {purchase.order}</p> */}
                <h1>Minimum Quantity : <span className='text-xl text-secondary font-bold'>{purchase.minimumQuantity}</span></h1>
                <h1>available Quantity : <span className='text-xl text-secondary font-bold'>{purchase.availableQuantity}</span></h1>
            </div>
            
            <div class="hero bg-base-200">
                
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-xl text-primary font-bold'>Order A Tool</h2>
                        <form onSubmit={handleAddItem} className='register'>
                            <input type="text" name="toolName" value={purchase.name} placeholder="Type here" class="input input-bordered w-full max-w-xs mb-1" />
                            <input type="text" name="name" value={user?.displayName} placeholder="Type here" class="input input-bordered w-full max-w-xs mb-1" />
                            <input type="email" value={user?.email} name="email" placeholder="Type here" class="input input-bordered w-full max-w-xs mb-1" />
                            <textarea class="textarea textarea-bordered w-full max-w-xs mb-1" name="Address" placeholder="Address"></textarea>

                            <input type="text" name="price" value= {`${purchase.price}`} placeholder="Type here" class="input input-bordered w-full max-w-xs mb-1" />

                            <input className='input input-bordered w-full max-w-xs mb-1' type="number" name="order" placeholder={`Minimum Order ${purchase.minimumQuantity} and Maximum Order ${purchase.availableQuantity}`} id="" /><br />                            
                            <input className='input input-bordered w-full max-w-xs mb-1' type="number" name="phone" placeholder='phone' id="" /><br />                            
                            <input className='btn btn-outline w-full max-w-xs text-primary uppercase font-bold mb-1' type="submit" value="Click Here To Order" />
                             
                        </form>
                        
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default PurchasePage;