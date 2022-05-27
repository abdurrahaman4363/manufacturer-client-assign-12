import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`https://protected-journey-65851.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {

                        signOut(auth);
                        localStorage.removeItem('accessToken')

                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                })
        }
    }, [user])
    return (
        <div>
            <h1 className='text-center font-bold text-xl text-primary'>This is my Orders : {orders.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Too Name</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.toolName}</td>
                                <td>{order.Address}</td>
                                <td>{order.price}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <span className='btn btn-xs btn-success'>Paid</span>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;