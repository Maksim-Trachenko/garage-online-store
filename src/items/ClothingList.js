import React from 'react';
import { Link } from 'react-router-dom';

const ClothingList = ({ name }) => {
  return (
    <section className='forMen-section'>
      <aside className='categories-section'>
        <ul className='category'>
          <li>T-shirts</li>
          <li>Hoodies</li>
          <li>Trousers</li>
          <li>Shoes</li>
        </ul>
      </aside>
      <article className='forMen-clothing-section'>
        <div className='forMen-title'>
          <h1>{name}</h1>
          <p>T-shirts</p>
        </div>
        <main className='forMen-catalogue'>
          <div className='forMen-element'>
            <div className='forMen-element-image'>
              <img
                src='https://static.super-shop.com/1253609-the-north-face-black-box-search-rescue-tshirt-tnf-black-960w.jpg'
                alt=''
              />
            </div>
            <div className='forMen-element-text'>
              <p>basic TNF t-shirt</p>
              <h3>45$</h3>
            </div>
          </div>
          <div className='forMen-element'>
            <div className='forMen-element-image'>
              <img
                src='https://static.super-shop.com/1253609-the-north-face-black-box-search-rescue-tshirt-tnf-black-960w.jpg'
                alt=''
              />
            </div>
            <div className='forMen-element-text'>
              <p>basic TNF t-shirt</p>
              <h3>45$</h3>
            </div>
          </div>
          <div className='forMen-element'>
            <div className='forMen-element-image'>
              <img
                src='https://static.super-shop.com/1253609-the-north-face-black-box-search-rescue-tshirt-tnf-black-960w.jpg'
                alt=''
              />
            </div>
            <div className='forMen-element-text'>
              <p>basic TNF t-shirt</p>
              <h3>45$</h3>
            </div>
          </div>
          <div className='forMen-element'>
            <div className='forMen-element-image'>
              <img
                src='https://static.super-shop.com/1253609-the-north-face-black-box-search-rescue-tshirt-tnf-black-960w.jpg'
                alt=''
              />
            </div>
            <div className='forMen-element-text'>
              <p>basic TNF t-shirt</p>
              <h3>45$</h3>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
};

export default ClothingList;
