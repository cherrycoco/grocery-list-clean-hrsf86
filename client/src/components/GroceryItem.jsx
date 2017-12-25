import React from 'react';

const GroceryItem = (props) => (
  <div>
    <li>{props.grocery.description} {props.grocery.quantity}</li>
  </div>
)

export default GroceryItem;
