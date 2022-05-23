import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';


const AddReview = (event) => {
    const [user] = useAuthState(auth);
    

   

    const handleAddItem = event => {
        event.preventDefault();
        const  ratings = event.target.ratings.value;
        const addItem = {
            name: user.displayName,
            email: user.email,
            description: event.target.description.value,
            ratings: event.target.ratings.value,
        }
        
        if(ratings > -1 && ratings <6 ){
            axios.post('http://localhost:5000/review', addItem)

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
            <div class="hero bg-base-200">
                
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-xl text-primary font-bold'>Add A Review</h2>
                        <form onSubmit={handleAddItem} className='register'>
                            <input type="text" name="name" value={user?.displayName} placeholder="Type here" class="input input-bordered w-full max-w-xs my-3" />
                            <input type="email" value={user?.email} name="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <textarea class="textarea textarea-bordered w-full max-w-xs my-2" name="description" placeholder="Write Description"></textarea>
                            <input className='input input-bordered w-full max-w-xs mb-3' type="number" name="ratings" placeholder='Ratings' id="" /><br />                            
                            <input className='w-full max-w-xs text-primary uppercase font-bold' type="submit" value="Add item" />
                             
                        </form>
                        
                    </div>
                </div>
                
            </div>
    );
};

export default AddReview;