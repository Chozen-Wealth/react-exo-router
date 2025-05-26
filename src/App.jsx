import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Details from './pages/Details'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:id' element={<Details/>} />
      </Routes>
    </>
  )
}

export default App
