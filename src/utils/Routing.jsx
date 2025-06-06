import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Details from '../components/Details'
import Create from '../components/Create'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    </>
  )
}

export default Routing