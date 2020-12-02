import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {
  
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRest(this.state)
    this.setState({
      text: '',
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>Add Restaurant</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
        </form>      
       </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addRest: info => dispatch({ type: 'ADD_REST', restaurant: info })
})

export default connect(null, mapDispatchToProps)(RestaurantInput);
