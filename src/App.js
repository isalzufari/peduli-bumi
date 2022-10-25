import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Import Components
import Navbar from './Components/Navbar';

// Import Pages
import Home from './Pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="kalkulator" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
