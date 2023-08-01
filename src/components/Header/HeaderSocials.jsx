import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        className='header__social-icon'
        href='https://www.linkedin.com/in/leonardo-melchiori-013678225/'
        target='_blank'
        rel='noopener noreferrer'>
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/leomel266'
        target='_blank'
        rel='noopener noreferrer'>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
