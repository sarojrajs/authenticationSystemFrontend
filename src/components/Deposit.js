import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/userSlice';
import './Deposit.css'
function Deposit() {
    const [amount,setAmount]=useState(0)
    const [pin,setPin]=useState('');
    const [message,setMessage]=useState('')
    const userDetails=useSelector(state=>state.user.user);
    const dispatch=useDispatch()
    const depositProcess=()=>{
        console.log(amount,pin)
        axios.put('http://localhost:3001/deposit',{
            amount:amount,
            pin:pin,
            id:userDetails._id,
        }).then(res=>{
            if(res.data===false)
            {
                setMessage('InValid Credentials')
            }else{
                setMessage('Success')
                console.log(res.data)
                dispatch(login(res.data))
            }
        })
    }
    return (
        <div className='deposit'>
            <h1 style={{'borderBottom':'1px solid black'}}>Deposit</h1>
            <div className='loginInput'>
                    <label>Money you want to deposit:</label>
                    <input type='number' value={amount} placeholder='Amount' onChange={(e)=>{
                        setAmount(e.target.value)
                    }}/>
            </div>
            <div className='loginInput'>
                    <label>Enter Pin:</label>
                    <input type='password' value={pin} placeholder='Pin' onChange={(e)=>{
                        setPin(e.target.value)
                    }}/>
            </div>
            <button onClick={depositProcess}>Ok</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Deposit
