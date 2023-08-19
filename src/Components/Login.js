import React, { useState } from "react";
import Profile from "./Profile";

const Login = ()=>{
    const [userData, setUserData] = useState({
        username:"",
        password:""
    });
    const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState("");
    

    const fetchData = (e)=>{
        e.preventDefault();
        const apiEndpoint = 'https://dummyjson.com/auth/login';
        const username = userData.username;
        const password = userData.password;

        // data will fetch when fields are not empty
        if(username !== "" && password !== ""){
            fetch(apiEndpoint,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response =>{
                // handling error, in case there is not error given by backend dev we manualy set a error
                if(!response.ok){
                    throw new Error("Invalid Credential")
                }
                return response.json();
            })
            .then(data => {
                setIsLogin(true);
                setUserData(data)
                setMessage("Successfully Login");
            })
            .catch(error =>{ 
                setMessage(error.message);
            })
        }    
    }
    if(isLogin){
        localStorage.setItem("user",JSON.stringify(userData));
    }
    
    return (
        <section className="container">
            
            <form onSubmit={fetchData} className="modal-box login-page">
                <header>
                    <small>Welcome back! 👏</small>
                    <h1>Sign in to your account</h1>
                </header>
                <div className="card-inputs">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onKeyUp={(e)=>{setUserData({...userData,username:e.target.value})}} required />
                </div>
                <div className="card-inputs">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onKeyUp={(e)=>{setUserData({...userData,password:e.target.value})}} required />
                </div>
                <button type="submit" className="btn" id="loginBtn">Login</button>
                <a className="pwd-link"href="#">Forget Your Password?</a>
                
                {message && <p id="error-message">{message}</p>}
            </form>
            <small id="signup-redirect">Dont't have an account? <a href="signup.html">Signup</a></small>
            <div className="bisect">
                <span className="sec-border left"></span>
                <span className="sec-border right"></span>
            </div>
        </section>
    )
}
export default Login;