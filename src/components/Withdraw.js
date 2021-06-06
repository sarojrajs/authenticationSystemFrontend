import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/userSlice';

function Withdraw() {
    const [amount,setAmount]=useState(0);
    const [pin,setPin]=useState('')
    const [message,setMessage]=useState('')
    const userDetails=useSelector(state=>state.user.user);
    const dispatch = useDispatch();
    const withdrawProcess=()=>{
        console.log('withdraw',amount,pin)
        axios.put('http://localhost:3001/withdraw',{
            amount:amount,
            id:userDetails._id,
            pin:pin,
        }).then(res=>{
            console.log(res);
            if(!res.data){
                setMessage('Failed')
                alert("Insufficent Amount/Invalid Credentials")
            }else{
                setMessage("Payment Complete");
                dispatch(login(res.data))
            }
        })
    }
    return (
        <div className='withdraw'>
            <h1 style={{'borderBottom':'1px solid black'}}>Withdraw</h1>
            <div className='loginInput'>
                    <label>Money you want to transfer:</label>
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
            <button onClick={withdrawProcess}>Ok</button>
            <h1>{message}</h1>
        </div>

    )
}

export default Withdraw
