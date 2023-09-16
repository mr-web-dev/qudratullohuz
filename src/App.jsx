import React from "react";
import "./App.css";
import Top from "./components/Top";
import Loader from "./components/Loader";
import Content from "./components/Content";
import Header from "./components/Header";
import Error404 from "./components/Error404";
import Home from "./page/Home";
import About from "./page/About";
import Portfolio from "./page/Portfolio";
import Skills from "./page/Skills";
import Contact from "./page/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Top/>
      <Loader/>
      <Content/>
      <Header />
      {/* ========== */}
      <Routes>
        <Route path="*" element={<Error404 />} />
        {/* ----- */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* ========== */}
      <Footer/>
    </>
  );
}
