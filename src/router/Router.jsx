import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout';
import { HomePage } from '../pages/HomePage';
import { Histoire } from '../pages/histoire';
import { Informations } from '../pages/Informations';
import CrewList from '../pages/CrewList';
import CrewDetails from '../pages/CrewDetails';
import Rockets from '../pages/Rockets';
import RocketDetails from '../pages/RocketDetails';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Crewlist" element={<CrewList />} />
          <Route path="/informations" element={<Informations />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/crewDetail/:id" element={<CrewDetails />} />
          <Route path="/rocketDetail/:id" element={<RocketDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
