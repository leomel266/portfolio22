import React from "react";
import "./Portfolio.css";
import movies from "../../assets/Movies.png";
import ecommerce from "../../assets/ecommerce.png";
import burger from "../../assets/burger1.png";

const data = [
  {
    id: 1,
    img: movies,
    title: "Movies",
    github: "https://github.com/leomel266",
    demo: "https://github.com/leomel266",
  },
  {
    id: 2,
    img: ecommerce,
    title: "E-Commerce",
    github: "https://github.com/leomel266",
    demo: "https://flahsagromelchiori.netlify.app/",
  },
  {
    id: 3,
    img: burger,
    title: "E-Commerce (static)",
    github: "https://github.com/leomel266",
    demo: "https://burgesas.netlify.app/",
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
