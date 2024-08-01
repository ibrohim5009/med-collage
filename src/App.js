import React, { Component } from 'react';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import Testimonials from './components/testimonials/Testimonials';
import Carusel from './components/carusel/Carusel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Section />
        <Header />
        <Testimonials />
        <Carusel/>
      </div>
    );
  }
}

export default App;
