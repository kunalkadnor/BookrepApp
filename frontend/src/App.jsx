import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./component/contact";
import Footer from "./component/footer";
import SignUp from "./component/signup";
import Courses from "./courses/Courses";
import Home from "./home/home";

function App() {
  return (
    <div className="bg-white">
      {/* <Home />
      <Course /> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={<Courses/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
