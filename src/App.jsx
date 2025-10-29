import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { Home } from './components/Home.jsx';
import { Services } from './components/Services.jsx';

import About from './components/About'

import Payment from './components/Payment.jsx';


function App() {
  const [count, setCount] = useState(0) 
  // usestate gi

  useEffect(() => {
    // useEffect es para usar javascript puro directo y código que se ejecuta después del renderizado
  }, [count])

  return (
    <>
   
    <Home/>

      
    <Navbar/>

    <Services />
    
    <Payment/>

      <Navbar />
      <main>
        <About />
      </main>
    </>
  )
}

export default App
