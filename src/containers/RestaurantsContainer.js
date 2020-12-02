import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {



  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants restaurants={this.props.restaurants} rmRest={this.props.rmRest}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => ({
  rmRest: id => dispatch({ type: 'RM_REST', id: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);