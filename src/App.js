import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Section from './components/section/Section';
import Header from './components/header/Header';
import Testimonials from './components/testimonials/Testimonials';
import ApplicationForm from './components/aplacation/Aplacation';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Banner/>
      <Section/>
      <Header/>
      <Testimonials/>
      <ApplicationForm/>
      </div>
    );
  }
}

export default App;
