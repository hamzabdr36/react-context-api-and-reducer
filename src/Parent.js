import React from 'react';
import './App.css';
import Child from './Child';
import Child2 from './Child2';

function Parent() {
  return (
    <div >
        PARENT
    <Child></Child>
    <Child2></Child2>
    </div>
  );
}

export default Parent;
