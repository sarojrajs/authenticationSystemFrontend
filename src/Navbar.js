import React from 'react'
import './Navbar.css'
function Navbar({clickPage}) {
    return (
        <div className='navbar'>
            <button onClick={()=>{
                clickPage('withdraw')
            }}>Withdraw</button>
            <button onClick={()=>{
                clickPage('deposit')
            }}>Deposit</button>
            <button onClick={()=>{
                clickPage('balance')
            }}>View Balance</button>
            <button onClick={()=>{
                clickPage('change')
            }}>Change Pin</button>

        </div>
    )
}

export default Navbar
