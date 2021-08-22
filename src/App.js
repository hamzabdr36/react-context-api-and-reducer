import React from 'react';
import './App.css';
import Parent from './Parent';

function App() {

  let [number, setnumber] = React.useState(45);
  return (
    <div >
     hello world
     <Parent num = {number}></Parent>
     <button onClick={()=>{setnumber(++number)}}>increase</button>
    </div>
  );
}

export default App;
