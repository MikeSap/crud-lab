import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: []
}, action) {

    switch (action.type) {
        case 'ADD_REST':    
          return { restaurants: [...state.restaurants, {...action.restaurant, id: cuid()}] };

          case 'RM_REST':    
          return { restaurants: state.restaurants.filter(r => r.id !== action.id) };
    
        default:
          return state;
      }

}
