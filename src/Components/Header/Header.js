import React from 'react';
import './Header.css';
import { ImHome } from "react-icons/im";

export default function Header () {
  return (
    <div className='header'>
      <a href='#intro' rel='home' className='header-home'><ImHome /></a>
      <nav className='header-nav'>
        <a href='#about'>ABOUT</a>
        <a href='#projects'>PROJECTS</a>
        <a href='#contact'>CONTACT</a>
      </nav>
    </div>
  )
}
