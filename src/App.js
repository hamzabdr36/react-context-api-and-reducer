import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {

 // let [number, setnumber] = React.useState(45);
 let value = useState(41);
 //let value = 81;
  return (
  <ValueContext.Provider value = {value}>
        <div >
         hello world
        <Parent></Parent>
     
    </div>
  </ValueContext.Provider>

 

  );
}

export default App;
