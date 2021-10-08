import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <section className='contact-container'>
      <div className='contact-text'>
        <h2>Contact us</h2>
        <p>If you have any questions, text us!</p>
      </div>
      <div className='form-page'>
        <form action=''>
          <div className='form-group'>
            <label htmlFor='fname' classname='form-label'>
              First Name
            </label>
            <input
              type='text'
              className='form-input'
              id='fname'
              name='firstName'
              placeholder='Brad'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lname' classname='form-label'>
              Last Name
            </label>
            <input
              type='text'
              className='form-input'
              id='lname'
              name='lastName'
              placeholder='Pitt'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' classname='form-label'>
              Your email
            </label>
            <input
              type='email'
              className='form-input'
              id='email'
              name='emailform'
              placeholder='brad.pitt@example.com'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message' classname='form-label'>
              Message
            </label>
            <textarea
              name='messageForm'
              id='message'
              cols='35'
              rows='7'
              className='form-input'
              placeholder='Enter you message...'
            ></textarea>
          </div>
          <div className='submit-btn'>
            <input type='submit' className='form-btn' value='Submit' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
