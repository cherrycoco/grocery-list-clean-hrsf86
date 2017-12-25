import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null,
      description: null
    }
  }

  updateQuantity (quantity) {
    this.setState({
      quantity: quantity
    })
  }

  updateDescription (description) {
    this.setState({
      description: description
    })
  }

  onClick() {
    this.props.addGroceryToList(this.state.description, this.state.quantity);
    this.refs.description.value = '';
    this.refs.quantity.value = '';
  }

  render () {
    return (
      <div>
        <div>
          <label>
            Description:
            <input ref="description" type="text" name="description" onChange={e => this.updateDescription(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input ref="quantity" type="text" name="quantity" onChange={e => this.updateQuantity(e.target.value)}/>
          </label>
          <input type="submit" value="Add Grocery" onClick={() => this.onClick()} />
        </div>
      </div>
    );
  }
}

export default AddGrocery;
