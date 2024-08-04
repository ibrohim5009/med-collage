import React from 'react'
import Banner from './components/banner/Banner'
import Carusel from './components/carusel/Carusel'
import Header from './components/header/Header'
import Section from './components/section/Section'
import Testimonials from './components/testimonials/Testimonials'

const Home = () => {
    return (
        <div>
            <Banner />
            <Section />
            <Header />
            <Testimonials />
            <Carusel />
        </div>
    )
}

export default Home