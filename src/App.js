import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <nav>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
      </nav>

      <main>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
