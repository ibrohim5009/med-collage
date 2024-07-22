import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Section from './components/section/Section';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Banner/>
      <Section/>
      <Header/>
      </div>
    );
  }
}

export default App;
