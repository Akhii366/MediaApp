import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/watch-history" element={<WatchHistory/>} />
      
    </Routes>

    </>
  )
}

export default App
