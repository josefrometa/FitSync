import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { Home } from './components/Home.jsx';
import { Services } from './components/Services.jsx';
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0) 
  // usestate 

  useEffect(() => {
    // useEffect es para usar javascript puro directo y código que se ejecuta después del renderizado
  }, [count])

  return (
    <>
   
    <Home/>

      
    <Navbar/>

    <Services />


      <Navbar />
      <main>
        <About />
      </main>
    </>
  )
}

export default App
