<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 64b534d1565533ddb7039bfc3cd7b9acace80afd
    </>
  )
}

export default App
