import React from 'react';
import '../styles/Extra.css';
import ShuttleIcon from '../assets/shuttle-space-solid.svg';

function Extra() {
  return(
    <section className='extra-wrap'>
        <h2>Você no controle!</h2>
        <p className='subtitle'>Participe das atividades, ganhe pontos e troque por benefícios</p>
        <ul>
            <li><img src={ShuttleIcon} alt='shuttle icon' />NFTs</li>
            <li><img src={ShuttleIcon} alt='shuttle icon' />Cursos</li>
            <li><img src={ShuttleIcon} alt='shuttle icon' />Espaços de divulgação</li>
            <li><img src={ShuttleIcon} alt='shuttle icon' />Acesso à Conteúdos Exclusivos</li>
        </ul>
        <button>Entrar para comunidade</button>
    </section>
  )
};


export default Extra