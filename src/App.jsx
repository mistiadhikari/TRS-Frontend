import React from 'react'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Residence from './Pages/Residence'
import Hotels from './Pages/Hotels'

const App = () => {
  return (
    <Routes>
       <Route path="/" element= {<MainLayout/>}>
       <Route index element={<Home />}/>
         <Route path="/Residence" element={<Residence />} />
         <Route path="/Hotels" element={<Hotels/>} />
       </Route>
    </Routes>
  )
}

export default App