import React from "react";
import "./Footer.css";
import { FaGithubAlt } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Leonardo
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experiences</a>
        </li>
        <li>
          <a href='#services'>Me</a>
        </li>
        <li>
          <a href='#porfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Courses</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/leonardo-melchiori-013678225/'
          target='_blank'
          rel='noopener noreferrer'>
          <ImLinkedin />
        </a>
        <a
          href='https://github.com/leomel266'
          target='_blank'
          rel='noopener noreferrer'>
          <FaGithubAlt />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Leonardo. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
