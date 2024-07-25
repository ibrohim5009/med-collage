import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Section from './components/section/Section';
import Header from './components/header/Header';
import Testimonials from './components/testimonials/Testimonials';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Banner/>
      <Section/>
      <Header/>
      <Testimonials/>

      </div>
    );
  }
}

export default App;
