import React, { useEffect, useState } from 'react';

const Profile = ()=>{
    
    const user = JSON.parse(localStorage.getItem('user'));
    const [userDetails, setUserDetails] = useState('');
    useEffect(()=>{
        if(user == null){
            return;
        }
        fetch(`https://dummyjson.com/users/${user.id}`,{
            method: 'GET'
        })
        .then((response)=>{
            if(!response.ok){
                return new Error('Server error');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('userDetails',JSON.stringify(data));
            setUserDetails(data);
        })
        .catch(error =>{ 
            console.log(error);
        })
    },[])
    
    return(
        <div>
            {
                userDetails && 
                <div>
                    {JSON.stringify(userDetails)}
                </div>
            }
        </div>
    )
}

export default Profile