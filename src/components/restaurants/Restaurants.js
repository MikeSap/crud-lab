import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(r => {
          return <Restaurant {...r} key={r.id} rmRest={this.props.rmRest}/>
        })}
      </ul>
    );
  }
};

export default Restaurants;