import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing/Pricing';
import About from './components/About';
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        <About />
        <Pricing />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
