import React from 'react';
import { Link } from 'react-router-dom';

const Favourite = () => {
  const fetchAsos = async () => {
    const response = await fetch(
      'https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'asos2.p.rapidapi.com',
          'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  fetchAsos();
  return <h2>It's Favourite page!</h2>;
};

export default Favourite;
