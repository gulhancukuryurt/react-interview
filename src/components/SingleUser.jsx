import React from 'react'


const SingleUser = ({ user, idx }) => {
    return (
        <div className='users'>

            <img src={user.picture.large}></img>
            <div className='user-info'>

                <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
                <h4>Age: {user.dob.age}</h4>
                <p>E-mail: {user.email} | Phone: {user.phone}</p>
                <h4>Location: {user.location.city} , {user.location.country}  </h4>
            </div>
           
        </div>


    )
}

export default SingleUser