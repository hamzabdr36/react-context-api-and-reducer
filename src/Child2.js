import React, { useContext, useReducer } from 'react';
import reducer from './numberReducer';


function Child2() {
 
    let [state, dispatch] = useReducer(reducer,44);
  return (
    <div >
     CHILD2 {state}
     <button onClick={()=>{dispatch({type:"INCREMENT", value: 3})}}>increment</button>
     <button onClick={()=>{dispatch({type:"DECREMENT", value: 3})}}>decrement</button>
    </div>
  );
}

export default Child2;