import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function Register() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [pin,setPin]=useState('');
    const history=useHistory()
    const register=(e)=>{
        e.preventDefault();
        console.log(username,password);
        axios.post("http://localhost:3001/insert",{
            username:username,
            password:password,
            pin:pin,
        }).then((res)=>{
            console.log(res);
            alert("Account Created");
            history.push('/');
        })
    }

    return (
        <div className='register'>
            <div className='registerContainer'>
                <h1>Register</h1>
                <div className='registerInput'>
                    <label >Username:</label>
                    <input type='text'  placeholder='username' onChange={(e)=>{
                        setUsername(e.target.value);
                    }}/>
                </div>
                <div className='registerInput'>
                    <label >Password:</label>
                    <input type='password' placeholder='password' onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                </div>
                <div className='registerInput'>
                    <label >Set Pin:</label>
                    <input type='password' placeholder='password' onChange={(e)=>{
                        setPin(e.target.value);
                    }}/>
                </div>
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default Register 
