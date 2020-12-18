import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const[second , setSecond] = useState(0);
  
  function reverseCount(event, inputValue) {
    
    if(event.keyCode !== 13)
      return;

      if(inputValue <= 0 || isNaN(inputValue)) {
        
    console.log('something');
        setSecond(0);
        return;
      }
    inputValue = Math.floor(inputValue);  
    
    setSecond(inputValue);
  }

  useEffect(() => {
    let val = null;

    if(second > 0) {
      val = setTimeout(() => setSecond(second-1), 1000);
    } 

    return () => clearInterval(val)
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input 
            id="timeCount" 
            onKeyDown={e => reverseCount(e, e.target.value)} 
          /> sec.
        </h1>
      </div>
      <div id="current-time">{second}</div>
    </div>
  )
}


export default App;
