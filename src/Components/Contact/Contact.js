import React from 'react';
import './Contact.css';
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact () {
  return (
    <div className='contact' id='contact'>
      <div className='contact-icons'>
        <a href='https://www.linkedin.com/in/jessicagrunewald/' target='_blank' className='icon'><AiFillLinkedin /></a>
        <a href='https://github.com/jagrunewald' target='_blank' className='icon'><DiGithubBadge /></a>
        <a href='https://www.instagram.com/_grunewald/' target='_blank' className='icon'><AiFillInstagram /></a>
      </div>
      <div className='contact-email'>
        <p>je_grunewald@hotmail.com</p>
      </div>
      <div className='contact-whatsapp'>
        <AiOutlineWhatsApp />
        <p>+353 83 2068269</p>
      </div>
    </div>
  )
}
