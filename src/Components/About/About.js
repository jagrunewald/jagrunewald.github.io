import React, { useState } from 'react';
import './About.css';
import option0 from '../../img/op0.jpg';
import option1 from '../../img/op1.jpeg';
import option2 from '../../img/op2.jpeg';
import option3 from '../../img/op3.jpeg';
import option4 from '../../img/op4.jpeg';
import cv from '../../files/cv.pdf';

const GALLERY = [
  option0,
  option1,
  option2,
  option3,
  option4,
];

export default function About () {
  const [photoInitial, setPhotoInitial] = useState(option1);

  function changePhoto (index) {
    setPhotoInitial(GALLERY[index]);
  }

  return (
    <div className='about' id='about'>
      <div className='about-gallery'>
        <img src={photoInitial} alt='profile' className='gallery-image' />
        {/* <Gallery onClick={changePhoto} /> */}
        {/* <div className='gallery-options'>
          <ul>
            {GALLERY.map((option, index) => {
                return (
                  <li key={index}>
                    <button onClick={() => changePhoto(index)}>
                      <img src={option} alt='photo' className='img-options' />
                    </button>
                  </li>
                );
              })}
          </ul>				
        </div>        */}
      </div>
      <div className='about-info'>
        <h2>WHO I AM</h2>
        <div className='about-text'>
          <p>I am a professional in career transition. I've been studying software programming for a year and I'm also very interested in data analysis.</p>
          <p>I'm Brazilian, but I currently live in Ireland to study English.</p>
        </div>
        <button className='about-button-cv'>
          <a href={cv} download>Download CV</a>
        </button>
      </div>
    </div>
  )
}
