import React from "react";

import projeto1Img from "../assets/projeto1.png";
import projeto2Img from "../assets/projeto2.png";
import projeto3Img from "../assets/projeto3.png";
import projeto4Img from "../assets/projeto4.png";

const ProjectCard = ({ title, description, image, link }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-button"
    >
      Clique aqui
    </a>
  </div>
);

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Site institucional completo",
      description:
        "Site moderno e responsivo criado para uma empresa de serviços, apresentando informações, áreas de atuação e um formulário de contato funcional. Desenvolvido do zero — do design ao código. Tecnologias: Figma, HTML, CSS, JavaScript, AOS, Formspree.",
        image: projeto1Img,
        link: 'https://brazilianhands.vercel.app/'
    },
    {
      id: 2,
      title: "Plataforma de troca de pontos",
      description:
        "Sistema onde usuários acumulam pontos a cada compra e podem trocá-los por prêmios. Você atuou no front-end, prototipação e UX/UI. Tecnologias: Figma, HTML, CSS, JavaScript.",
        image: projeto2Img,
        link: 'https://plugowtech.vercel.app/'
    },
    {
      id: 3,
      title: "Gerador de EPCs",
      description:
        "Ferramenta simples criada para gerar códigos EPC automaticamente, reduzindo erros manuais e agilizando processos internos. Tecnologias: JavaScript, HTML, CSS.",
        image: projeto3Img,
        link: 'https://advanced-generator.vercel.app/'
    },
    {
      id: 4,
      title: "Gerador Avançado de EPCs",
      description:
        "Aplicação mais completa e robusta que funciona como uma planilha Excel dentro do navegador. Permite importar, editar, manipular, gerar EPCs e exportar dados (como .csv e .xlsx), facilitando o trabalho com grandes bancos de dados. Tecnologias: JavaScript, HTML, CSS.",
        image: projeto4Img,
        link: 'https://advanced-generator.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
