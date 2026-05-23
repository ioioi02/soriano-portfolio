import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import LandingPage from './pages/LandingPage'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
