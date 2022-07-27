import React from 'react';
import Item from '../Item/Item';
import classes from './List.module.css';
const List = ({ data }) => {
  return (
    <div>
      <h1>The most popular models</h1>
      <ul className={classes.list}>
        {data?.map((item) => (
          <Item key={item.id} model={item.model} make={item.make} />
        ))}
      </ul>
    </div>
  );
};

export default List;
