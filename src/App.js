import logo from "./logo.svg";
import "./styles/App.css";
import { useState } from "react";
import React from 'react';
import Router from "./router/Router";
import CrewList from './pages/CrewList'; // Assurez-vous de fournir le bon chemin vers le fichier CrewList.js

const App = () => {
  return (
    <Router  exact path="/" component={CrewList} >
      
   
    </Router>
  );
};

export default App;
