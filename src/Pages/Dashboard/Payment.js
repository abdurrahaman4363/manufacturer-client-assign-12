import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0jK3EnHvMGsEJY1kMPeKl83ramGhBH57Xkm9h35zaclnNxuNeC9vvI8afm2N39mmogB0qc0DDOTGqy6tnEqQDx00fBUjUxx0');


const Payment = () => {
    const { id } = useParams();

    const url = `https://protected-journey-65851.herokuapp.com/order/${id}`

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch(`https://protected-journey-65851.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })

    }, [])
    return (
        <div>



            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <p className='text-primary font-bold'>Hello, {orders.name}</p>
                    <h2 class="card-title">Pay For : {orders.toolName}</h2>
                    <p>Plase Pay: {orders.price}</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;