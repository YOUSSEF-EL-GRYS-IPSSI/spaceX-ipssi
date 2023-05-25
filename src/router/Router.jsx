import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { Layout } from "../components/layout";
import { HomePage } from "../pages/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
