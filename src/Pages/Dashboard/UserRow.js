import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index, refetch}) => {
    const {email, role} = user;
    const MakeAdmin  = () =>{
      fetch(`https://protected-journey-65851.herokuapp.com/user/admin/${email}`,{
          method:'PUT',
        
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        
      })
      .then(res => {
          if(res.status === 403){
              toast.error('Failed to make an admin')
          }
         return res.json()
        })
      .then(data => {
          if(data.modifiedCount > 0){
            refetch()
            toast('Successfully mad an admin')
          }
      })

    }

    return (
        <tr>
                                <th>{index + 1}</th>
                                <th>{email}</th>
                                <th>{role !== 'admin' &&  <button class="btn btn-xs" onClick={MakeAdmin}>make a admin</button>}</th>
                                <th><button class="btn btn-xs">Cencel</button></th>
                            </tr>
    );
};

export default UserRow;