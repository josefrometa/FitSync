import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log( `You clicked ${count} times`);
  }, [count])

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
