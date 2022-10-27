import React from "react";
import "./About.css";
import dev from "../../assets/dev.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import me from "../../assets/me2.png";

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
                I have a lot of experience working with other people, I am
                looking for the opportunity to work formally as a developer
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
            I am a persevering person in what I set out to do and for quite some
            time I set myself the goal of being a developer, and I firmly
            believe that I am fulfilling that goal.
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
