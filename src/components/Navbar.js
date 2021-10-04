import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <ul className='nav-links'>
          <li>
            <span class='material-icons'>search</span>
            Search
          </li>
          <li>
            <Link to='/basket'>
              <span class='material-icons'>shopping_cart</span>Basket
            </Link>
          </li>
          <li>
            <Link to='/favourite'>
              <span class='material-icons'>favorite</span>Favorite
            </Link>
          </li>
          <li>
            <span class='material-icons'>account_circle</span>Log in
          </li>
        </ul>
        <p className='logo'>
          <Link to='/'>Garage</Link>
        </p>
        <ul className='nav-links'>
          <li>
            <Link to='/forMen' title='For men'>
              For Men
            </Link>
          </li>
          <li>
            <Link to='/forWomen'>For Women</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
