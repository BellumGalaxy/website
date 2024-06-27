import React from 'react';
import '../styles/Projetos.css';

function Projetos() {
  const projects = [
    { title: 'Exploração Galáctica', description: 'Projeto voltado para a exploração de novas galáxias e sistemas estelares.' },
    { title: 'Colônia em Marte', description: 'Iniciativa para estabelecer a primeira colônia humana em Marte.' },
    { title: 'Observatório Espacial', description: 'Desenvolvimento de um observatório para monitoramento e pesquisa de fenômenos espaciais.' },
    { title: 'Energia de Fusão', description: 'Projeto de pesquisa sobre a viabilidade da energia de fusão para viagens interplanetárias.' },
    { title: 'IA Astronômica', description: 'Criação de uma inteligência artificial para auxiliar na análise de dados astronômicos.' }
];

  return (
    <section id='projetos' className='projetos-wrap'>
      <h6>Projetos</h6>
      <p className='subtitle'>Descubra nossas iniciativas inovadoras e colaborativas.</p>
    
      <div className='cards-container'>
        {projects.map((project, index) => (
          <div className='card' key={index}>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <button>Saiba mais</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projetos