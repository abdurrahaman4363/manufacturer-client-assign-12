import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify'
import MyProfileDetail from './MyProfileDetail';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    // console.log(user.email)
//////////////// data send
    const handleAddItem = event => {
        event.preventDefault();
        const orders = {
            name: user.displayName,
            email: user.email,
            
            education: event.target.education.value,
            location: event.target.location.value,
            
            phone: event.target.phone.value,
            
        }

        console.log(orders.name, orders.email, orders.education, orders.location, orders.phone)
        fetch(`https://protected-journey-65851.herokuapp.com/profile/${user.email}`,{
            method:'PUT',
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

    ///////////////////data get

    const [profile, setProfile] = useState([]);
    // console.log(profile)
    

    useEffect(() => {
        
            fetch(`https://protected-journey-65851.herokuapp.com/profile?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setProfile(data);
                })
        
    }, [user])
    return (
        <div>
            <h1 className='text-center text-xl'>This is my Profile : {profile.length}</h1>
            <div class="hero bg-base-200">
                
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-xl text-primary font-bold'>Update Or Add New Information</h2>
                        <form onSubmit={handleAddItem} className='register'>
                          
                            <input type="text" name="name" value={user?.displayName} placeholder="Type here" class="input input-bordered w-full max-w-xs mb-1" />
                            <input type="email" value={user?.email} name="email" placeholder="Type here" class="input input-bordered w-full max-w-xs mb-1" />
                            <textarea class="textarea textarea-bordered w-full max-w-xs mb-1" name="education" placeholder="education"></textarea>
                            <textarea class="textarea textarea-bordered w-full max-w-xs mb-1" name="location" placeholder="location"></textarea>
                            <input className='input input-bordered w-full max-w-xs mb-1' type="number" name="phone" placeholder='phone' id="" /><br />                            
                            <input className='w-full max-w-xs text-primary uppercase font-bold mb-1' type="submit" value="Click Here To Update" />
                             
                        </form>
                        
                    </div>
                </div>
                
            </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
               profile.map(p => <MyProfileDetail 
                key={p._id}
               p={p}
               ></MyProfileDetail>)
           }
           </div>
          
        </div>
    );
};

export default MyProfile;