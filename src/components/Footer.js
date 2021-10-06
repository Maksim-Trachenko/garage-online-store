import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer-links'>
        <li className='footer-icons'>instagram</li>
        <li className='footer-icons'>telegram</li>
        <li className='footer-icons'>github</li>
      </ul>
      <p>
        &copy; <span id='date'></span>Garage, all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
