// src/App.js
import React from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Icons from './components/Icons';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Icons />
      <About />
      <Footer />
    </div>
  );
}

export default App;
