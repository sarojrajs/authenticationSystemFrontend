import React from 'react'
import { useSelector } from 'react-redux'

function ViewBalance() {
    const userDetails=useSelector(state=>state.user.user)
    return (
        <div className='viewBalance'>
            <h1>Your Balance is:</h1>
            <h1>Rs. {userDetails.balance}</h1>
        </div>
    )
}

export default ViewBalance
