import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/navbar/Navbar';
import NewsDetail from './components/carusel/CaruselDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
