import React, { useEffect, useState } from 'react';

const Profile = ()=>{
    
    const user = JSON.parse(localStorage.getItem('user'));
    const [userDetails, setUserDetails] = useState('');
    const [uId,setUserId] = useState('');
    useEffect(()=>{
        if(user !== "") {
            setUserId(user.id);
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
                document.getElementById('box').style.display = 'none';
                localStorage.setItem('userDetails',JSON.stringify(data));
                setUserDetails(data);
            })
            .catch(error =>{ 
                console.log(error);
            })
        }
    },[uId])
    
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