import React from 'react';
import '../styles/Hero.css';
import LogoBellum from '../assets/logo-bellum.svg';

function Hero() {
  return (
    <>
        <section  id="hero-section" className='hero-wrap'>
            <img src={LogoBellum} alt='Logo Bellum Galaxy' />
            <span>Explore o universo da Web3</span>
            <h1>Bellum Galaxy</h1>
            <p>Junte-se a nós e embarque em uma busca incansável pelo conhecimento!</p>
            <button>
                Seja um desbravador
            </button>
        </section>
        <div>
            
        </div>
    </>
  )
}

export default Hero