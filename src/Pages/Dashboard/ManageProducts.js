import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [tools, setTools] = useState([]);

    useEffect(()=>{
         fetch('http://localhost:5000/tool')
         .then(res => res.json())
         .then(data =>{
            //   console.log(data);
              setTools(data);
            })
    },[])

//////////////////////////////////
     const handleAddDelete = id => {
        const proced = window.confirm('Are you sure???');
        if (proced) {
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = tools.filter(tool => tool._id !== id)
                    setTools(remaining)
                })
        }
    } 
    return (
        <div>
            <h1>Manage products</h1>
            <div>
            <h1 className='text-xl text-center my-10 font-bold text-purple-500'>All Agriculture Tools : {tools.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map( tool => <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img src={tool.img} alt="" />
                        <h2 class="card-title">{tool.name}</h2>
                        <p>{tool.description}</p>
                        <p>Price: {tool.price}</p>
                        <h1>Minimum Quantity : <span className='text-xl text-secondary font-bold'>{tool.minimumQuantity}</span></h1>
                        <h1>available Quantity : <span className='text-xl text-secondary font-bold'>{tool.availableQuantity}</span></h1>
                        <button  className='btn btn-dark' onClick={() => handleAddDelete(tool._id)}>Delete</button>
                    </div>
                </div>
                      
                    )
                }
            </div>
            
        </div>
        </div>
    );
};

export default ManageProducts;