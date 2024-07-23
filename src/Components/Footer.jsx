import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
import logo from "../assests/logo.png";

const Footer = () => {
  return (
    <footer>
    <div>
        <img src={logo} alt="Founder" />

        <h2>Priyanshu Saini</h2>
        <p>Priyanshu Protofilo Project</p>
    </div>

    <aside>
        <h2>Social Media</h2>

        <article>
            <a href="#inst"><AiFillInstagram/></a>
            <a href="#github"><AiFillGithub/></a>
            <a href="#linkedin"><AiFillLinkedin/></a>
        </article>
    </aside>

    <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  );
};

export default Footer;