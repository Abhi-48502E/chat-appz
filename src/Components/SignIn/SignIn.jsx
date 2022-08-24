import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../../Firebase'
import './SignIn.css'

function SignIn() {
    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)

    }
  return (
    <div className='wrapper'>
        <GoogleButton onClick={googleSignIn}/>

    </div>
  )
}

export default SignIn