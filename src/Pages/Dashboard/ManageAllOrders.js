import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
         fetch('https://protected-journey-65851.herokuapp.com/order',{
            method:'GET',
              headers:{
                  authorization:`Bearer ${localStorage.getItem('accessToken')}`
              }
          
        })
         .then(res => res.json())
         .then(data =>{
            //   console.log(data);
            setOrders(data);
            })
    },[])
    return (
        <div>
           
           
            <div>
            <h1 className='text-center font-bold text-xl text-primary'>This is my Orders : {orders.length}</h1>
            <p className='text-center'>payment paid unpaid can not implement because of stripe account problem</p>
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
                            </tr>)
                        }


                    </tbody>
                </table>
            </div> 
        </div>
        </div>
    );
};

export default ManageAllOrders;