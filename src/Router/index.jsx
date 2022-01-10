import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'


export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/reg" element={<Register />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}
