import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Auth from './components/auth/Auth';
import NewsDetail from './components/carusel/CaruselDetail';
import Navbar from './components/navbar/Navbar';

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
