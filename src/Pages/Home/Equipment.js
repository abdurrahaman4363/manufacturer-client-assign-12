import React from 'react';
import equipment1 from '../../assets/images/equipment1.jpg'

const Equipment = () => {
    return (
        <div>
            <h1 className='text-xl text-center my-10 font-bold text-purple-500'>Rotary Tiller Details</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={equipment1} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">About Rotary Tiller </h1>
                        <p class="py-6">Rotary Tillers are machines used for both primary and secondary Tillage for cultivating the soil. They use a series of blades that eliminate weeds, relieve compaction, as it mixes and levels the soil. This agricultural equipment is very powerful and is used for seedbed preparation.</p>
                        <button class="btn btn-secondary">More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;