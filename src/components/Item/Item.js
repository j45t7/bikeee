import React from 'react';
import classes from './Item.module.css';
const Item = ({ model, make }) => {
  return (
    <li className={classes.card}>
      <h2>{make}</h2>
      <h3>{model}</h3>
      <img src='/assets/images/bicycle.png' alt='' />
    </li>
  );
};

export default Item;
