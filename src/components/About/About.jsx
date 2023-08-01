import React from 'react';
import './About.css';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import me from '../../assets/me2.png';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt='dev' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>
                I have had the opportunity to work on various projects that have
                allowed me to develop skills in HTML, CSS, JavaScript, React,
                Node.js, and MongoDB. In addition, I have completed several
                courses and certifications in FullStack technologies, which has
                allowed me to develop a solid knowledge of the field.
              </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyects</h5>
              <small>
                All my projects are public in my GitHub repository and below you
                can see the most important works I have
              </small>
            </article>
          </div>
        </div>
        <div className='about__text'>
          <p className='about__text-p'>
            Passionate, self-directed FullStack developer with a strong
            background in web technologies. Skilled in HTML, CSS, JavaScript,
            React, Node.js, and MongoDB. Completed multiple FullStack courses
            and certifications. Goal-oriented team player, thriving in
            fast-paced environments. Eager to learn and grow as a developer.
            Seeking a challenging, evolving work environment to contribute
            skills and achieve company goals.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
