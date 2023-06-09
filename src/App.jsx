/** @format */
/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Overview from "./Pages/overview";
import Certify from "./Pages/certification";
import Header from "./components/head/head";
import Footer from "./components/footer/footer";
import Myportfolio from "./Pages/portfolio";
import Projectone from "./Pages/portfoliolink";
import Projecttwo from "./Pages/socialnetwork";

import Details from "./Pages/aboutlink";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/certification" element={<Certify />} />
        <Route path="/portfolio" element={<Myportfolio />} />
        <Route path="/portfoliolink" element={<Projectone />} />
        <Route path="/socialnetwork" element={<Projecttwo />} />
        <Route path="/aboutlink" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
