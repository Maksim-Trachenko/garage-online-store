import React from 'react';
import { Link } from 'react-router-dom';

const Basket = () => {
  return (
    <section className='basket-section'>
      <h1 className='basket-title'>Basket</h1>
      <article className='basket-items'>
        <div className='basket-item'>
          <div className='basket-item-img'>
            <img
              src='https://static.super-shop.com/1253609-the-north-face-black-box-search-rescue-tshirt-tnf-black-960w.jpg'
              alt=''
            />
          </div>
          <div className='basket-item-info'>
            <div className='basket-item-icons'>
              <i>X</i>
            </div>
            <div className='basket-item-text'>
              <h3>
                Black basic T-shirt Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ne?
              </h3>
              <p>45$</p>
              <ul>
                <li>Amount</li>
                <li>Size</li>
                <li>Color</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='basket-item'>
          <div className='basket-item-img'>
            <img
              src='https://static.super-shop.com/1253609-the-north-face-black-box-search-rescue-tshirt-tnf-black-960w.jpg'
              alt=''
            />
          </div>
          <div className='basket-item-info'>
            <div className='basket-item-icons'>
              <i>X</i>
            </div>
            <div className='basket-item-text'>
              <h3>
                Black basic T-shirt Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ne?
              </h3>
              <p>45$</p>
              <ul>
                <li>Amount</li>
                <li>Size</li>
                <li>Color</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='basket-item'>
          <div className='basket-item-img'>
            <img
              src='https://static.super-shop.com/1253609-the-north-face-black-box-search-rescue-tshirt-tnf-black-960w.jpg'
              alt=''
            />
          </div>
          <div className='basket-item-info'>
            <div className='basket-item-icons'>
              <i>X</i>
            </div>
            <div className='basket-item-text'>
              <h3>
                Black basic T-shirt Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ne?
              </h3>
              <p>45$</p>
              <ul>
                <li>Amount</li>
                <li>Size</li>
                <li>Color</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <aside className='basket-purchase'>
        <div className='basket-purchase-flex'>
          <div className='basket-purchase-upper'>
            <div className='basket-purchase-first'>
              <p className='first-upper-el'>Your basket</p>
              <p className='first-upper-el2'> 3 items</p>
            </div>
            <div className='basket-purchase-second'>
              <p className='second-upper-el'>Total price</p>
              <p className='second-upper-el2'>150$</p>
            </div>
            <div className='basket-purchase-third'>
              <p className='third-upper-el'>Discount</p>
              <p className='third-upper-el2'>0$</p>
            </div>
          </div>
          <hr className='basket-divison' />
          <div className='basket-purchase-lower'>
            <div className='total-price'>
              <p>Total price</p>
              <p>150$</p>
            </div>
            <button className='basket-purchase-btn'>Buy</button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Basket;
