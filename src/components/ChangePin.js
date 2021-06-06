import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/userSlice';

function ChangePin() {
    const [currentPin,setCurrentPin]=useState('');
    const [newPin,setNewPin]=useState('')
    const userDetails=useSelector(state=>state.user.user)
    const dispatch=useDispatch()
    const chnagePin=()=>{
        console.log(currentPin,newPin)
        axios.put('http://localhost:3001/changePin',{
            id:userDetails._id,
            currentPin:currentPin,
            newPin:newPin,
        }).then(res=>{
            if(res.data===false){
                alert("Invalid Credentials")
            }else{
                alert("Pin Changed")
                dispatch(login(res.data))
            }
        })
    }
    return (
        <div className='changePin'>
                <div className='loginInput'>
                    <label>Enter your current pin:</label>
                    <input type='password' placeholder='Current Pin' value={currentPin} onChange={(e)=>{
                        setCurrentPin(e.target.value);
                    }}/>
                </div>
                <div className='loginInput'>
                    <label>Enter your New pin:</label>
                    <input type='password' placeholder='New Pin' value={newPin} onChange={(e)=>{
                        setNewPin(e.target.value);
                    }}/>
                </div>
                <button onClick={chnagePin}>Change Pin</button>
        </div>
    )
}

export default ChangePin 
