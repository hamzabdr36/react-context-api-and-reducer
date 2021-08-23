import React, { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child() {
    let value = useContext(ValueContext);
    
 
  return (
    <div >
     CHILD1 {value}
     <button onClick={()=>value[1](++value[0])}>increase value</button>
   
    </div>
  );
}

export default Child;
