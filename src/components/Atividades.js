import React from 'react';
import '../styles/Atividades.css';

function Atividades() {
  const atividades = [
    { title: 'Oficina de Astronomia', description: 'Aprenda sobre as constelações e a história da astronomia.' },
    { title: 'Simulação de Missão Espacial', description: 'Participe de uma simulação de missão espacial com desafios reais.' },
    { title: 'Palestra sobre Buracos Negros', description: 'Descubra os mistérios dos buracos negros com especialistas.' },
    { title: 'Observação Noturna', description: 'Sessão de observação noturna com telescópios de alta potência.' },
    { title: 'Workshop de Astrobiologia', description: 'Explore a possibilidade de vida em outros planetas.' }
];

  return (
    <>
        <section id='atividades' className='atividades-wrap'>
            <h6>Atividades</h6>
            <p className='subtitle'>Fique por dentro das nossas atividades.</p>
            <div className='atividades-cards'>
            {atividades.map((atividade, index) => (
                <div key={index} className='atividade-card'>
                    <h5>{atividade.title}</h5>
                    <p>{atividade.description}</p>
                    <button>Saiba Mais</button>
                </div>
            ))}
        </div>
        </section>
    </>
  )
}

export default Atividades