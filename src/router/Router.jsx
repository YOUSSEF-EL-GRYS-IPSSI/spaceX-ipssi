import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout'
import { HomePage } from '../pages/HomePage'
import CrewList from '../pages/CrewList'
import { Histoire } from '../pages/histoire'
import { Informations } from '../pages/Informations'
import CrewDetails from '../pages/CrewDetails'

export default function Router() {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/informations' element={<Informations />} />
               <Route path='/Crewlist' element={<CrewList />} />
               <Route path='/histoire' element={<Histoire />} />
               <Route path='/crewdetail/:id' element={<CrewDetails />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}
