import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import Hero from '../components/Hero';
import Header from '../components/Header';
import Projects from '../components/List-project';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Projects/>
      
      
    </>
  )
}

export default App
