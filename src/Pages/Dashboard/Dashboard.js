import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-primary font-bold text-4xl'>Welcome To Dashboard</h2>
                <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                    <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                    <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                    <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;