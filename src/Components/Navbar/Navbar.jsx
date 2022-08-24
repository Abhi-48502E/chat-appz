import React from 'react'
import './Navbar.css'
import {auth} from '../../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from '../SignIn/SignIn'
import LogOut from '../LogOut/LogOut'
function Navbar() {
  const [user]=useAuthState(auth)
  console.log(user)
  return (
    <div className='nav'>
        <h1 className='heading'>CHAT-APP</h1>
        {user ? <LogOut/> : <SignIn/>}
        
    </div>
  )
}
export default Navbar 