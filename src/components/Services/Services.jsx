import React from 'react';
import './Services.css';
import { BsCheck2 } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>How am i?</h5>
      <h2>Soft Skills</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Characteristics that stand out to me</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Creativity and innovation</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Capacity for collaboration and teamwork</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Adaptability and flexibility</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Productivity and time management</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
