import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { HomePage } from "../pages/HomePage";
import { Histoire } from "../pages/histoire";

import CrewList from '../pages/CrewList';
import CrewDetails from '../pages/CrewDetails';


export default function Router() {
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
}
