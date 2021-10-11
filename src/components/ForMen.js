import React from 'react';
import ClothingList from '../items/ClothingList';
import { Link } from 'react-router-dom';

const data = {
  name: 'For men',
};
const ForMen = () => {
  const title = data;
  return <ClothingList {...title} />;
};
export default ForMen;
