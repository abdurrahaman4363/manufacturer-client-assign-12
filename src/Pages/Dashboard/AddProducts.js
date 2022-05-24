import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProducts = () => {

    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();

        const addItem = {

            description: event.target.description.value,
            mini: event.target.mini.value,
            available: event.target.available.value,
            name: event.target.name.value,
            price: event.target.price.value,
            photoURL: event.target.photoURL.value,
        }


        axios.post('http://localhost:5000/review', addItem)

            .then(Response => {
                const { data } = Response;
                if (data.insertedId) {
                    console.log(data)

                    toast('Product is added!!!')
                    event.target.reset();
                }
            })

    }
    return (
        <div>
            <h1>Admin Add A Product</h1>
            <div class="hero bg-base-200">

                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-xl text-primary font-bold'>Add A Product</h2>
                        <form onSubmit={handleAddItem} className='register'>
                            <input type="text" name="name" placeholder="Name" class="input input-bordered w-full max-w-xs my-3" />
                            <input type="text" name="mini" placeholder="Minimum Order" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name="available" placeholder="Available Order" class="input input-bordered w-full max-w-xs" />
                            <textarea class="textarea textarea-bordered w-full max-w-xs my-2" name="description" placeholder="Write Description"></textarea>
                            <input className='input input-bordered w-full max-w-xs mb-3' type="number" name="price" placeholder='price' id="" /><br />
                            <input name="photoURL" placeholder="Photo URL" class="input input-bordered w-full max-w-xs" />

                            <input className='w-full max-w-xs text-primary uppercase font-bold' type="submit" value="Add item" />

                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProducts;