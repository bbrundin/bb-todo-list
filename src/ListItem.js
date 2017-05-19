import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { item, index, removeItem } = this.props;
    return (
      <li className="listItem">
        <div className="listItemText">
          {index + 1}. {item}
        </div>
        <span className="removeButton" onClick={ () => {removeItem(index)} }>
          x
        </span>
      </li>
    );
  }
}