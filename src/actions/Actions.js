// Other actions...

function fetchItemsRequest() {
    return {
      type: 'FETCH_ITEMS_REQUEST',
    };
  }
  
  function fetchItemsSuccess(data) {
    return {
      type: 'FETCH_ITEMS_SUCCESS',
      payload: data,
    };
  }
  
  function fetchItemsFailure(error) {
    return {
      type: 'FETCH_ITEMS_FAILURE',
      payload: error,
    };
  }
  
  export function fetchItems() {
    return function (dispatch) {
      dispatch(fetchItemsRequest()); // Dispatch an action to indicate that the API request is in progress.
  
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchItemsSuccess(data)); // Dispatch the success action with the fetched data.
        })
        .catch((error) => {
          dispatch(fetchItemsFailure(error)); // Dispatch an action to handle errors.
        });
    };
  }
  
  // Other actions...
  