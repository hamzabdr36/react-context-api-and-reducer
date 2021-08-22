import React, { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child() {
    let value = useContext(ValueContext);
  return (
    <div >
     CHILD1 {value}
    </div>
  );
}

export default Child;
