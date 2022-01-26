import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SingUp from './components/pages/SingUp';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <main> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/sign-up" element={<SingUp/>}/>
        </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
