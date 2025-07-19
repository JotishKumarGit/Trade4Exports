import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Headers/Header";
import Footer from "./components/Headers/Footer";
import Home from './pages/Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

