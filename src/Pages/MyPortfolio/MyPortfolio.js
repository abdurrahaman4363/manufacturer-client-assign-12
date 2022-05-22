import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='text-center my-5'>
            <h2>This is my Protfolio</h2>
            <div class="card lg:max-w-lg w-50 mx-auto bg-base-100 shadow-xl text-left">
                <div class="card-body">
                    <h2 class="card">Name: Abdur Rahaman</h2>
                    <p>Email: abdurjrahaman4363@gmail.com</p>
                    <p className='text-center'> Educational Background </p>
                    <h1> <span>Varsity : </span> BGC Trust University Bangladesh.</h1>
                    <h1> <span>College : </span> Sir A.T. Govt. College.</h1>
                    <h1> <span>School : </span> Jaisthapura Romoni Mohon High School.</h1>
                    <p className='text-center'> List of Technologies </p>
                    <p>1. HTML</p>
                    <p>2. CSS</p>
                    <p>3. Bootstrap</p>
                    <p>4. Tailwind</p>
                    <p>5. Javasript</p>
                    <p>6. React</p>
                    <p>7. Node js</p>
                    <p>8. Express js</p>
                    <p>9. Mongodb</p>
                    <p className='text-center'>Website link</p>
                    <p><a href=" https://warehouse-assignment-11.web.app/">Click here to go website link-1</a> </p>
                    <p><a href=" https://service-provider-assign-10.web.app/">Click here to go webiste link-2</a> </p>
                    <p><a href=" https://gilded-cuchufli-4c48fa.netlify.app/">Click here to go webiste link-3</a> </p>
                    
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;