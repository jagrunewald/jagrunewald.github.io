import React from 'react';
import './Header.css';
import { ImHome } from "react-icons/im";

export default function Header () {
  return (
    <div className='header'>
      <a href='#intro' rel='home' className='header-home'><ImHome /></a>
      <nav className='header-nav'>
        <h2><a href='#about'>About</a></h2>
        <h2><a href='#projects'>Projects</a></h2>
      </nav>
    </div>
  )
}
