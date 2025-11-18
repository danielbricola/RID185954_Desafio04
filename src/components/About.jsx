import React from 'react';

const TimelineItem = ({ year, text }) => (
  <div className="timeline-item">
    <div className="timeline-year">{year}</div>
    <p>{text}</p>
  </div>
);

function About() {
  const timelineData = [
    { year: '2022', text: 'Em 2022, desenvolvi meu primeiro Gerador de EPCs, uma ferramenta simples criada para automatizar códigos e facilitar processos internos.' },
    { year: '2023', text: 'Em 2023, criei um site institucional completo, cuidando desde o design no Figma até o desenvolvimento em HTML, CSS e JavaScript.' },
    { year: '2024', text: 'Em 2024, participei do desenvolvimento de uma plataforma de troca de pontos, atuando no front-end e no UX/UI para entregar uma experiência clara e funcional.' },
    { year: '2025', text: 'E em 2025, lancei o Gerador Avançado de EPCs, uma solução robusta que funciona como uma planilha interativa para manipular, gerar e exportar grandes bancos de dados de EPCs.' },
  ];
  return (
    <section id="about" className="about-section">
      <h2>Sobre mim</h2>
      <div className="timeline">
        {timelineData.map(item => (
          <TimelineItem key={item.year} year={item.year} text={item.text} />
        ))}
      </div>
    </section>
  );
}

export default About;