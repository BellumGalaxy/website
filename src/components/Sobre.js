import React from 'react';
import '../styles/Sobre.css';
import PlanetIcon from '../assets/planet-icon.svg';

function Sobre() {
  return (
    <>
        <section id='sobre' className='sobre-wrap'>
            <h6>Sobre a Bellum</h6>
            <p>
                Na <span>Bellum Galaxy</span>, unimos as estrelas da ciência e da tecnologia para forjar o futuro.
                <br /><br />
                Permita-nos ajudá-lo a alcançar seu verdadeiro potencial transformando aspirações em realizações estelares.
            </p>
            <div className='sobre-detalhes'>
                <p><img src={PlanetIcon} alt='planet icon' />Participe das Atividades</p>
                <p><img src={PlanetIcon} alt='planet icon' />Compartilhe Experiências</p>
                <p><img src={PlanetIcon} alt='planet icon' />Crie Projetos Próprios</p>
                <p><img src={PlanetIcon} alt='planet icon' />Ajude-nos a ajudar o próximo!</p>
            </div>
            <div className='division-bar'></div>
        </section>
        
    </>
  )
}

export default Sobre