// Other cases...

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_ITEMS_SUCCESS':
        return {
          ...state,
          items: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_ITEMS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      // Other cases...
      default:
        return state;
    }
  }
  