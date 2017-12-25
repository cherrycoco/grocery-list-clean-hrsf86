import React from 'react';
import ReactDOM from 'react-dom';
import groceryListData from '../../database/data.js'
import GroceryList from './components/GroceryList.jsx'
import AddGrocery from './components/AddGrocery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryListData.groceryList
    }
  }

  addGroceryToList(grocery, quantity) {
    var newItem = {
      id: this.state.list[this.state.list.length - 1].id + 1,
      quantity: quantity,
      description: grocery
    };

    var groceries = [];

    this.state.list.forEach((item, idx) => {
      if (grocery.toLowerCase() === item.description.toLowerCase()) {
        groceries.push(item.description.toLowerCase());
        item.quantity = quantity;

        this.setState ({
          list: this.state.list
        })
      }
    })

    if (!groceries.includes(grocery.toLowerCase())) {
      this.setState({
        list: [...this.state.list, newItem]
      });
    }
  }

  render () {
    return (

      <div>
        <div>
          <h1>GROCERY LIST</h1>
        </div>
        <div className="add-grocery">
          <AddGrocery addGroceryToList={this.addGroceryToList.bind(this)}/>
        </div>
        <div className="grocery-list">
          <GroceryList groceries={this.state.list}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
