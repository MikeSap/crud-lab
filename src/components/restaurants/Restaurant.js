import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { text, id } = this.props;

    return (
      <div>
        <li>
          {text}
          <button onClick={() => this.props.rmRest(id)}> X </button>
          <ReviewsContainer restaurant={this.props}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
