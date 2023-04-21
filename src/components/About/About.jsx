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
                I have had the opportunity to work on
                various projects that have allowed me to develop skills in HTML,
                CSS, JavaScript, React, Node.js, and MongoDB. In addition, I
                have completed several courses and certifications in FullStack
                technologies, which has allowed me to develop a solid knowledge
                of the field.
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
          <p>
            I am a passionate, self-directed FullStack developer with a strong
            background in web development technologies. I love solving complex
            problems and creating innovative solutions to improve the user
            experience. During my education, I have had the opportunity to work
            on various projects that have allowed me to develop skills in HTML,
            CSS, JavaScript, React, Node.js, and MongoDB. In addition, I have
            completed several courses and certifications in FullStack
            technologies, which has allowed me to develop a solid knowledge of
            the field. I am a goal-oriented person and I like to work as a team
            to achieve outstanding results. I am comfortable working in
            fast-paced, dynamic environments and am always looking to learn and
            grow as a developer. I am interested in working in a challenging and
            constantly evolving work environment, in which I can continue to
            develop my skills and knowledge. Being a FullStack developer, I have
            a balanced approach to the technical and visual aspects of a website
            or application. I hope to be able to contribute my skills and
            knowledge to a team and contribute to the achievement of the
            company's goals.
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
