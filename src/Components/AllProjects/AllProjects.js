import React from 'react';
import './AllProjects.css';
import img1 from '../../img/img-1.png'
import img2 from '../../img/img-2.png';
import img3 from '../../img/gf.png';
import { AiFillPlaySquare } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";

export default function AllProjects () {
  return (
    <div className='projects' id='projects'>
      {/* <div className='projects-title'>
        <h2>PROJECTS</h2>
      </div> */}
      <div className='projects-options'>
        <div className='proj-options'>
          <img src={img1} alt='Imagem' />
          <h3>Lemon Tune</h3>
          <p>Javascript | React | CSS</p>
          <div className='proj-links'>
            <a href='https://jagrunewald.github.io/lemon-tune/#/' target='_blank'><AiFillPlaySquare /></a>
            <a href='https://github.com/jagrunewald/lemon-tune' target='_blank'><DiGithubBadge /></a>
          </div>
        </div>
        <div className='proj-options'>
          <img src={img2} alt=''></img>
          <h3>Pokédex</h3>
          <p>Javascript | React | CSS</p>
          <div className='proj-links'>
            <a href='https://jagrunewald.github.io/pokedex/' target='_blank'><AiFillPlaySquare /></a>
            <a href='https://github.com/jagrunewald/pokedex' target='_blank'><DiGithubBadge /></a>
          </div>
        </div>
        <div className='proj-options'>
          <img src={img3} alt=''></img>
          <h3>Analytics</h3>
          <p>Under construction</p>
          <div className='proj-links'>
            <a href=''><AiFillPlaySquare /></a>
            <a href='' target='_blank'><DiGithubBadge /></a>
          </div>
        </div>
      </div>        
    </div>
  )
}
