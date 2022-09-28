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
import StepSelector from './components/StepSelector';
import './components/assets/css/style.css';
import RegularCleaning from './Pages/RegularCleaning';
import DeepCleaning from './Pages/DeepCleaning';
import PostConstructCleaning from './Pages/PostConstructCleaning';
import MoveCleaning from './Pages/MoveCleaning';
import OfficeCleaning from './Pages/OfficeCleaning';
import ConstructionProtection from './Pages/ConstructionProtection';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navigation />
      <div className='topMargin'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Book' element={<Book />} />
          <Route path='/stepform' element={<StepSelector />} />
          <Route path='/regular_cleaning' element={<RegularCleaning />} />
          <Route path='/deep_cleaning' element={<DeepCleaning />} />
          <Route path='/post_cleaning' element={<PostConstructCleaning />} />
          <Route path='/move_cleaning' element={<MoveCleaning />} />
          <Route path='/office_cleaning' element={<OfficeCleaning />} />
          <Route path='/construct_protect' element={<ConstructionProtection />} />
        </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
