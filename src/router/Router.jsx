import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout'
import { HomePage } from '../pages/HomePage'
import CrewList from '../pages/CrewList'
import { Histoire } from '../pages/histoire'
import { Informations } from '../pages/Informations'

export default function Router() {
<<<<<<< HEAD
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/Crewlist" element={<CrewList />} />
        
          <Route exact path="/crewDetail/:id" element={<CrewDetails/>} />
          <Route path="/histoire" element={<Histoire />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
=======
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/informations' element={<Informations />} />
               <Route path='/Crewlist' element={<CrewList />} />
               <Route path='/histoire' element={<Histoire />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
>>>>>>> 7644f593527ceb6ded80839cd174af5b0dbfa82c
}
