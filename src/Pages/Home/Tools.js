import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(()=>{
         fetch('http://localhost:5000/tool')
         .then(res => res.json())
         .then(data => {
              console.log("from tool",data);
              setTools(data);
            })
    },[])

    
   

    return (
        <div>
            <h1 className='text-xl text-center my-10 font-bold text-purple-500'>Agriculture Tools:{tools.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(0,6).map( tool => <Tool 
                        key={tool._id}
                        tool={tool}
                        ></Tool>)
                }
            </div>
            
        </div>
    );
};

export default Tools;