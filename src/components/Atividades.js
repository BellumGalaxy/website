import React from 'react';
import '../styles/Atividades.css';

function Atividades() {
  const atividades = [
    { 
      title: 'Oficina de Astronomia', 
      description: 'Aprenda sobre as constelações e a história da astronomia.',
      characteristics: ['Observação ao ar livre', 'Mapas celestes', 'História da astronomia']
    },
    { 
      title: 'Simulação de Missão Espacial', 
      description: 'Participe de uma simulação de missão espacial com desafios reais.',
      characteristics: ['Treinamento em grupo', 'Resolução de problemas', 'Ambiente simulado']
    },
    { 
      title: 'Palestra sobre Buracos Negros', 
      description: 'Descubra os mistérios dos buracos negros com especialistas.',
      characteristics: ['Teoria da Relatividade', 'Singularidades', 'Astrofísica avançada']
    },
    { 
      title: 'Observação Noturna', 
      description: 'Sessão de observação noturna com telescópios de alta potência.',
      characteristics: ['Telescópios de última geração', 'Guias especializados', 'Local seguro']
    },
    { 
      title: 'Workshop de Astrobiologia', 
      description: 'Explore a possibilidade de vida em outros planetas.',
      characteristics: ['Análise de exoplanetas', 'Microrganismos extremófilos', 'Futuras missões espaciais']
    }
  ];

  return (
    <>
        <section id='atividades' className='atividades-wrap'>
            <h6>Atividades</h6>
            <p className='subtitle'>Fique por dentro das nossas atividades</p>
            <div className='atividades-cards'>
              {atividades.map((atividade, index) => (
                <div key={index} className='atividade-card'>
                  <h5>{atividade.title}</h5>
                  <p>{atividade.description}</p>
                  <ul className='characteristics'>
                    {atividade.characteristics.map((item, idx) => (
                      <li key={idx}>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                        </svg>
                          {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>
    </>
  )
}

export default Atividades