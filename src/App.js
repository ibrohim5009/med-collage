import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Section from './components/section/Section';
import Header from './components/header/Header';
import Testimonials from './components/testimonials/Testimonials';
import Rahbaryat from './components/rahbaryat/Rahbaryat';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Banner/>
      <Section/>
      <Header/>
      <Testimonials/>
      <Rahbaryat/>
      </div>
    );
  }
}

export default App;
