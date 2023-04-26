import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-car-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
