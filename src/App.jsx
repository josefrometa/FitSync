import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0) 
  // usestate 

  useEffect(() => {
    // useEffect es para usar javascript puro directo y código que se ejecuta después del renderizado
  }, [count])

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
