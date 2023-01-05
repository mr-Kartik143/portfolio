import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import Skills from "./Component/Skills/Skills";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Project from "./Component/Project/Project";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project/>
      <Service />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
