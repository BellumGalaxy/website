import React from 'react'
import '../styles/Homepage.css'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Projetos from '../components/Projetos'
import Atividades from '../components/Atividades'

function Homepage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Sobre />
        <Projetos />
        <Atividades />
    </>
  )
}

export default Homepage