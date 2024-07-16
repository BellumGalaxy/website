import React from 'react';
import '../styles/Hero.css';
import LogoBellum from '../assets/logo-bellum.svg';

function Hero() {
  return (
    <section
      className="flex flex-col items-center h-screen"
      style={{
        backgroundImage: `
          radial-gradient(circle at top, #030917 50%, #1e897c33 55%, #030917 75%)
        `
      }}
    >
  
        <section  id="hero-section" className='hero-wrap'>
            <img src={LogoBellum} alt='Logo Bellum Galaxy' />
            <span>Explore o universo da Web3</span>
            <h1>Bellum Galaxy</h1>
            <p>Junte-se a nós e embarque em uma busca incansável pelo conhecimento!</p>
            <a href='https://discord.com/invite/H2UpdzbbRJ'>
                Seja um desbravador
            </a>
        </section>
    </section>
    
  )
}

export default Hero