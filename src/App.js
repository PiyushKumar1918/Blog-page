
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Navbar from "./Components/navBar";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
