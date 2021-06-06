import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Login.css'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {login} from './reducers/userSlice'
function Login() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();
    const dispatch=useDispatch();
    const userData=useSelector(state=>state.user.user);
    const loginUser=()=>{
        axios.get(`http://localhost:3001/?username=${username}&password=${password}`)
        .then(res=>{
            if(res.data){
                console.log(res);
               const value=res.data;
               dispatch(login(value))
                alert('Authentication Successful');
                history.push('/home');
            }else{
                alert('Incorrect Credential');
            }
        }).catch(err=>{
            alert(err.message)
        })
    }

    useEffect(()=>{
        if(userData){
            history.push('/home')
        }
    },[userData])

    return (
        <div className='login'>
            <div className='loginContainer'>
                <h1>Login</h1>
                <div className='loginInput'>
                    <label>Username:</label>
                    <input type='text' placeholder='username' onChange={(e)=>{
                        setUsername(e.target.value);
                    }}/>
                </div>
                <div className='loginInput'>
                    <label>Password:</label>
                    <input type='password' placeholder='password' onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                </div>
                <button className='login' onClick={loginUser} >Login</button>
                <a href='/register'>Register</a>
            </div>
            
        </div>
    )
}

export default Login
