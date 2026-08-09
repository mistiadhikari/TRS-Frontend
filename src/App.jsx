import React from 'react'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Residence from './Pages/Residence'
import Hotels from './Pages/Hotels'
import CorporateStay from './Pages/CorporateStay'
import Explore from './Pages/Explore'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <Routes>
       <Route path="/" element= {<MainLayout/>}>
       <Route index element={<Home />}/>
         <Route path="/Residence" element={<Residence />} />
         <Route path="/Hotels" element={<Hotels/>} />
         <Route path="/CorporateStay" element={<CorporateStay/>} />
         <Route path="/Explore" element={<Explore/>} />
          <Route path="/Contact" element={<Contact/>} />
       </Route>
    </Routes>
  )
}

export default App