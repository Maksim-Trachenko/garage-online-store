import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='about-section'>
      <div className='about-content'>
        <h1 id='about-title'>Who we are?</h1>
        <p>
          We are company which sales a street style clothing Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nulla, iure.
        </p>
        <Link to='/contacts'>
          <button className='hero-btn about'>Contact us</button>
        </Link>
      </div>
      <img
        src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        alt=''
      />
    </section>
  );
};

export default About;
