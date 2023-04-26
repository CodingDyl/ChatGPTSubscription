import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  )
}

export default App
