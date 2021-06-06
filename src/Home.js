import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ChangePin from './components/ChangePin';
import Deposit from './components/Deposit';
import ViewBalance from './components/ViewBalance';
import Withdraw from './components/Withdraw';
import './Home.css'
import Navbar from './Navbar';
import { logout } from './reducers/userSlice';
function Home() {
    const dispatch=useDispatch()
    const history=useHistory()
    const userDetails=useSelector(state=>state.user.user)
    const [page,setPage]=useState('');

    const signOut=()=>{
        alert('Logged out');
        dispatch(logout());
        history.push('/')        
    }
    useEffect(()=>{
        if(!userDetails){
            history.push('/')
        }
    },[])
    const clickPage=(number)=>{
        setPage(number)
    }
    return (
        <div className='home'>
            <button onClick={signOut}>Sign Out</button>
            <h1>Welcome to the website</h1>
            <Navbar clickPage={clickPage}/>
            <div className='homeContainer'>
                {page==='' && <h1>Welcome</h1>}
                {page==='withdraw' && <Withdraw/>}
                {page==='deposit' && <Deposit/>}
                {page==='balance' && <ViewBalance/>}
                {page==='change' && <ChangePin/>}

            </div>
        </div>
    )
}

export default Home
