import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        &copy; <span id='date'></span>Garage, all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
