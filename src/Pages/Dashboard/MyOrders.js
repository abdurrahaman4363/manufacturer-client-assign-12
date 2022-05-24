import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
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
      </tr>
    </thead>
    <tbody>
        {
            orders.map((order, index) =>   <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.toolName}</td>
                <td>{order.Address}</td>
                <td>{order.price}</td>
              </tr>)
        }
      
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;