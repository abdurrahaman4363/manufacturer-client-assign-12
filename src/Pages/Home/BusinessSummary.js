import React from 'react';
import revenue from '../../assets/icons/revenue.png'
import review from '../../assets/icons/review.png'

const BusinessSummary = () => {
    return (
        <div className='mx-6'>
            <h1 className='text-xl text-center my-10 font-bold text-purple-500'>Business Summary</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-3'>
                {/* one */}
                <div class="stats shadow bg-primary text-white">
                    <div class="stat text-center">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?w=128&h=128" alt='' />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">100+</div>
                        <div class="stat">Customers</div>
                    </div>
                </div>
                {/* two */}

                <div class="stats shadow bg-secondary text-white">
                    <div class="stat text-center">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src={revenue} alt='' />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">120M+</div>
                        <div class="stat">Annual Revenue</div>
                    </div>

                </div>
                {/* three */}
                <div class="stats shadow bg-accent text-white">
                    <div class="stat text-center">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src={review} alt='' />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">33K+</div>
                        <div class="stat">Reviews</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;