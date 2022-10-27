import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        rel='noopener noreferrer'>
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        rel='noopener noreferrer'>
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        rel='noopener noreferrer'>
        <BiBookAlt />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        rel='noopener noreferrer'>
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        rel='noopener noreferrer'>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
