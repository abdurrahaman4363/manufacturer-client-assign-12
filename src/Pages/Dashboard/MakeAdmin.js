import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const {data:users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
      method:'GET',
      headers:{
          authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    } 

    return (
        <div>
            <h1 className='text-center font-bold text-xl text-primary'>This is my Orders : {users.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow 
                            index={index}
                            user={user}
                            refetch={refetch}
                            ></UserRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;