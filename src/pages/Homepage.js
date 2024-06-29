import React from 'react'
import '../styles/Homepage.css'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Projetos from '../components/Projetos'
import Atividades from '../components/Atividades'
import Divisor from '../components/Divisor'
import Extra from '../components/Extra'
import Bellum from '../components/Bellum'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Sobre />
        <Projetos />
        <Divisor />
        <Atividades />
        <Divisor />
        <Extra />
        <Bellum />
        <Footer />
    </>
  )
}

export default Homepage