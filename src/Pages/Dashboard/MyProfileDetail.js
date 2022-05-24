import React from 'react';

const MyProfileDetail = ({ p }) => {
    const { name, email, phone, education, location } = p;
    console.log(p)
    return (
        <div>

            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>

                    <p>Description: {education}</p>
                    <p>Description: {location}</p>
                    </div>
                </div> 
            </div>
            ); 
        
};

            export default MyProfileDetail;