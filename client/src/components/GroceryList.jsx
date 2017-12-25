import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  <div className="groceries">
    <ul>
      {props.groceries.map((grocery, idx) =>
        <GroceryItem key={idx} grocery={grocery}/>
      )}
    </ul>
  </div>
)

export default GroceryList;
