import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/watch-history" element={<WatchHistory/>} />
      
    </Routes>




    <Footer/>
    </>
  )
}

export default App
