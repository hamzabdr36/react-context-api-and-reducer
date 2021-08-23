import React, { useReducer } from 'react';



const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.value
      case 'DECREMENT':
        return state - action.value
     
    }
  }

  export default reducer;