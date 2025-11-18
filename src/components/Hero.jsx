import React, { useState, useEffect } from "react";

function Hero() {
  const [title, setTitle] = useState("");
  const fullTitle = "Daniel Victor Brícola";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setTitle(fullTitle.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>
        Sou desenvolvedor front-end focado em criar experiências web modernas e
        intuitivas, unindo design e tecnologia com HTML, CSS, JavaScript,
        Next.js e Figma.
      </p>
      <button className="cta-button">Saber mais</button>
    </section>
  );
}

export default Hero;
