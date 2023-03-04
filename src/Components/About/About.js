import React from 'react';
import './About.css';
import img from '../../img/about-img.jpeg';
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export default function About () {
  return (
    <div className='about' id='about'>
      <div className='about-gallery'>
        <div className='about-gallery-image' id='gallery'>
          <img src={img} alt='profile' className='gallery-image'/>
        </div>
        <div className='contact-icons'>
          <a href='https://www.linkedin.com/in/jessicagrunewald/' target='_blank' className='icon'><AiFillLinkedin /></a>
          <a href='https://github.com/jagrunewald' target='_blank' className='icon'><DiGithubBadge /></a>
          {/* <a href='https://www.instagram.com/_grunewald/' target='_blank' className='icon'><AiFillInstagram /></a> */}
        </div>   
      </div>
      <div className='about-info'>
        <h2 className='about-education'>Education</h2>
        <div className='about-text'>
          <p className='about-text-education'><strong>Técnico em Redes de Computadores | </strong>IFRS - 2011 a 2012</p>
          <p className='about-text-education'><strong>Bacharel em Administração de Empresas | </strong>Unisinos - 2013 a 2018</p>
          <p className='about-text-education'><strong>Bootcamp Desenvolvedor Python | </strong>XP Educação - Em andamento</p>
        </div>
        <h2 className='about-skill'>Skills</h2>
        <div className='about-text-skill'>
          <p className='about-text-skills'>SQL | Python | JavaScript | React</p>
          <p className='about-text-skills'>Excel | Google Sheets</p>
          <p className='about-text-skills'>Power BI | Google Data Studio </p>
        </div>
      </div>
    </div>
  )
}
