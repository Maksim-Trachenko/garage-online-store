import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home-page'>
      <div className='hero-image'>
        <div className='hero-text'>
          <p className='author'>Mark Grachev design</p>
          <h1 className='hero-title'>
            New nike air jordan 1 <br />
            only in Garage
          </h1>
          <p className='hero-article'>Purchase new air jordan's snickers</p>
          <button className='hero-btn'>More info</button>
        </div>
      </div>
      <div className='popular-models'>
        <h1>The most popular models</h1>
        <div className='popular-models-image'>
          <div className='popular-image first'>
            <img
              src='https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
              alt=''
            />
          </div>
          <div className='popular-image second'>
            <img
              src='https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
              alt=''
            />
          </div>
          <div className='popular-image third'>
            <img
              src='https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
              alt=''
            />
          </div>
        </div>
        <div className='popular-image-btns'>
          <i class='material-icons'>chevron_left</i>

          <i class='material-icons'>chevron_right</i>
        </div>
        <div className='popular-images-grid'>
          <div className='popular-grid-photo-1'>
            <img
              src='https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80'
              alt=''
            />
          </div>
          <div className='popular-grid-photo-2'>
            <img
              src='https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80'
              alt=''
            />
          </div>
          <div className='popular-grid-photo-3'>
            <img
              src='https://images.unsplash.com/photo-1522751707891-45b4e281010d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
