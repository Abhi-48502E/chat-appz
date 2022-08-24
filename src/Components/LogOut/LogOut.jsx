import React from 'react'
import './LogOut.css'
import {auth} from '../../Firebase'

function LogOut() {
    const signOut = ()=>{
        signOut(auth)
    }
  return (
    <button onClick={()=>auth.signOut()} className='btn'>LogOut</button>
  )
}

export default LogOut