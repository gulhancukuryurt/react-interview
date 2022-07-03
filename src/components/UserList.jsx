import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleUser from './SingleUser';


const UserList = () => {
 const [users, setUsers] = useState([]);

 const fetchUsers = async() => {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    setUsers(response.data.results);
 }

 useEffect(() => {
       fetchUsers();
 }, [])
   
  return (
    <div className='user-list'>
       <h2>Users</h2> 
    <ul>
    
           {
            users.map((user,idx) => (
                <li>
                    {' '}
                    <SingleUser user={user} key={idx} />
                    {' '}
                </li>
            ))
           }
       
    </ul>
        
    </div>
  )
}

export default UserList