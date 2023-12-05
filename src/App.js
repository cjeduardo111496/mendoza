import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Slider from './components/inc/Slider';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <div>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='*' element={<Home/>} exact/>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
