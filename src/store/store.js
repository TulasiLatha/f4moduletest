import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Define your initial state
const initialState = {
  items: [],
};

// Define your reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

// Create the Redux store with Thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
