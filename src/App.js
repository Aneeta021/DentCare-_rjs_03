import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Bottom from "./Components/Bottom/Bottom";
import About from "./Components/About/About"
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Doctor from "./Components/Doctors/Doctor";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element= {<Contact/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/doctors" element= {<Doctor/>}></Route>
        </Routes>
        <Bottom />
      </Router>
    </>
  );
};

export default App;
