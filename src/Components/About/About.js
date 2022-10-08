import React from 'react';
import './About.css';
import icon from '../../img/devblue.png';

export default function About () {
  return (
    <div className='about' id='about'>
      <div className='about-gallery'>
        <img src={icon} alt='profile' className='gallery-image' />        
      </div>
      <div className='about-info'>
        <h2 className='about-whoiam'>WHO I AM</h2>
        <div className='about-text'>
          <p>I am a professional in career transition. I've been studying software programming for a year. I'm Brazilian and I currently live in Waterford, Ireland.</p>
        </div>
        <h2>SKILLS</h2>
        <div className='about-text'>
          <p>HTML | CSS | JavaScript | React</p>
          <p>Node JS | Typescript | SQL </p>
        </div>
      </div>
    </div>
  )
}
