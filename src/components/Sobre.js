import React from 'react';
import '../styles/Sobre.css';
import Shuttle from '../assets/shuttle-space-solid.svg';

function Sobre() {
  return (
    <>
        <section id='sobre' className='sobre-wrap'>
            <h6>Sobre a Bellum</h6>
            <p>
                Na Bellum Galaxy, unimos as estrelas da ciência e da tecnologia para forjar o futuro.
                <br /><br />
                Permita-nos ajudá-lo a alcançar seu verdadeiro potencial transformando aspirações em realizações estelares.
            </p>
            <div className='division-bar'></div>
            <div className='sobre-detalhes'>
                <p><img src={Shuttle} alt='shuttle' />Participe das Atividades.</p>
                <p><img src={Shuttle} alt='shuttle' />Compartilhe Experiências.</p>
                <p><img src={Shuttle} alt='shuttle' />Crie Projetos Próprios.</p>
                <p><img src={Shuttle} alt='shuttle' />Ajude-nos a ajudar o próximo!</p>
            </div>
        </section>
    </>
  )
}

export default Sobre