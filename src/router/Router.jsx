import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { Layout } from "../components/layout";
import { HomePage } from "../pages/HomePage";
import CrewList from "../pages/CrewList";


export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Crewlist" element={<CrewList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
