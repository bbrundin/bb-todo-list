import React, { Component } from 'react';

export default class AddItem extends Component {

  render() {
  const { addItemToList } = this.props;
    return (
      <div>
        <input id="new-item" type="text" placeholder="Add your new item here" />
        <button onClick={ addItemToList }>Add Item</button>
      </div>
    );
  }
}