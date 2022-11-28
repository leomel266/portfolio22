import React from "react";
import "./Portfolio.css";
import ecommerce from "../../assets/ecommerce.png";
import academlo from "../../assets/academlo.png";
import weather from "../../assets/weather.png";

const data = [
  {
    id: 1,
    img: academlo,
    title: "ecommerce",
    github: "https://github.com/leomel266/academloEcommerce",
    demo: "https://melchioriacademlo.netlify.app/",
  },
  {
    id: 2,
    img: ecommerce,
    title: "E-Commerce",
    github: "https://github.com/leomel266/Ecommerce-Melchiori",
    demo: "https://flahsagromelchiori.netlify.app/",
  },
  {
    id: 3,
    img: weather,
    title: "Weather App",
    github: "https://github.com/leomel266/weatherapp",
    demo: "https://helpful-torrone-254391.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({ id, img, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='btn'>
                  github
                </a>
                <a
                  href={demo}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='btn btn-primary'>
                  live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
