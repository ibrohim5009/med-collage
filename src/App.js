import React, { Component } from 'react';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import Testimonials from './components/testimonials/Testimonials';
import Login from './components/login/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Section />
        <Header />
        <Testimonials />
        <Login/>
      </div>
    );
  }
}

export default App;
