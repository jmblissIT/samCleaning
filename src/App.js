import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/about';
import Service from './Pages/services';
import Contact from './Pages/Contact';
import Book from './Pages/Book';
import FAQ from './Pages/FAQ';
import Footer from './components/Footer';
import './components/assets/css/style.css';


function App() {
  return (
    <div className='App'>
     
     
      <Router>
      <Navigation />
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Book' element={<Book />} />
      
        </Routes>
      </Router>
      <Footer />
    </div>
  
  );
}

export default App;
