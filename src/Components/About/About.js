import React from 'react';
import './About.css';
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

export default function About () {
  return (
    <div className='about' id='about'>
      <div className='about-gallery'>
        <div className='contact-icons'>
          <a href='https://www.linkedin.com/in/jessicagrunewald/' target='_blank' className='icon'><AiFillLinkedin /></a>
          <a href='https://github.com/jagrunewald' target='_blank' className='icon'><DiGithubBadge /></a>
        </div>   
      </div>
      <div className='about-info'>
        <h2 className='about-education'>Education</h2>
        <div className='about-text'>
          <p className='about-text-education'><strong>Técnico em Redes de Computadores | </strong>IFRS - 2011 a 2012</p>
          <p className='about-text-education'><strong>Bacharel em Administração de Empresas | </strong>Unisinos - 2013 a 2018</p>
          <p className='about-text-education'><strong>Bootcamp Desenvolvedor Python | </strong>XP Educação - Em andamento</p>
        </div>
      </div>
    </div>
  )
}
