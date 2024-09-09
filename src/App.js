import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import SignUp from './pages/signup/SingUp';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <main> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
