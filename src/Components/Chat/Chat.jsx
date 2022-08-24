import React,{useState, useEffect, useRef} from 'react'
import './Chat.css'
import Message from './Message'
function Chat() {
  const scroll=useRef()
  return (
    <div className='main'>
      <Message/>
      <span ref={scroll}></span>
    </div>
  )
}

export default Chat