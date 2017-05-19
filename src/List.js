import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    const { items, removeItemFromList } = this.props;
    return (
        <div>
            <ul>
                {
                  items.map(
                      (item, index) => {
                        return <ListItem
                          key={index}
                          item={item}
                          index={index}
                          removeItem={removeItemFromList}
                        />
                      }
                   )
                }
            </ul>
        </div>
      );
    }
  }