import './App.css';
import React from 'react';
import Panels from "./Pages/About";
import Nav from './Components/Navbar';
import "./CSS/Style.css";
import Slider from './Components/Slider';
// import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <Slider />
      <Panels />
    </>
  );
}

export default App;
