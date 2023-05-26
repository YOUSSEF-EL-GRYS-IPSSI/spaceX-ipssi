import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout'
import { HomePage } from '../pages/HomePage'
import { Histoire } from '../pages/histoire'
import { Informations } from '../pages/Informations'
import CrewList from '../pages/CrewList'
import CrewDetails from '../pages/CrewDetails'
import RocketList from '../pages/RocketList'
import RocketDetails from '../pages/RocketDetails'
import { QuizPage } from '../pages/QuizPage'
import NotFound from '../pages/NotFound'
import { RocketsStatistiques } from '../pages/RocketsStatistiques'

export default function Router() {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/Crewlist' element={<CrewList />} />
               <Route path='/informations' element={<Informations />} />
               <Route path='/histoire' element={<Histoire />} />
               <Route path='/rockets' element={<RocketList />} />
               <Route path='/crewDetail/:id' element={<CrewDetails />} />
               <Route path='/rocketDetails/:id' element={<RocketDetails />} />
               <Route path='/rocketDetails/:id' element={<RocketDetails />} />
               <Route path='/quiz' element={<QuizPage />} />
               <Route path='*' element={<NotFound />} />
               <Route path='statistiques' element={<RocketsStatistiques />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}
