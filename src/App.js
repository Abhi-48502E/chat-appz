import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from './Components/Chat/Chat';


const style = {
  appContainer: `max-w-[720] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth)
  //console.log(user)
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
      </section>
      <Chat />

    </div>
  );
}

export default App;
