import React from 'react';

const SeeEquipment = () => {
    return (
        <div>
            <h1 className='text-xl text-center my-10 font-bold text-purple-500'>See Equipment</h1>
            <div class="hero min-h-screen bg-base-200 ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">See More Related Equipment</h1>
                        <p class="py-6">The modern farm machinery has upgraded the agricultural industry for the best. Some of the essential and most used machinery are Combine or Combine Harvester, Rotavator or Rotary Tiller, Plough or Plow, Tractor Trailer, Power Harrow, Leveler, water bowser, ripper machine, and disc harrow.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"></span>
                                </label>
                                <input type="text" placeholder="Write Any Name What You Want" class="input input-bordered" />
                            </div>
                            <select class="select input-bordered w-full max-w-xs">
                                <option disabled selected>Put Stock Name</option>
                                <option>Combine Harvester</option>
                                <option>Rotary Tiller</option>
                                <option>Plough</option>
                                <option>Tractor Trailer</option>
                                <option>Power Harrow</option>
                                <option>water bowser</option>
                            </select>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Go To Stock</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeEquipment;