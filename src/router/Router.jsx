import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { HomePage } from "../pages/HomePage";
import CrewList from "../pages/CrewList";
import { Histoire } from "../pages/histoire";


export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/Crewlist" element={<CrewList />} />
          <Route path="/histoire" element={<Histoire />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
