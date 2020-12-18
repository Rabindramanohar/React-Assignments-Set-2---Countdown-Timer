import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const[second , setSecond] = useState(0);
  
  function reverseCount(event) {
    if(event.keyCode !== 13)
      return;
    let cntValue = parseInt(event.target.value);
    setSecond(Math.floor(cntValue));
  }

  useEffect(() => {
    let val = null;
    if (second > 0) {
      val = setTimeout(() => setSecond(second-1), 1000);
    } else {
      setTimeout(0);
    }

    return () => clearInterval(val)
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={reverseCount} /> sec.
        </h1>
      </div>
      <div id="current-time">{second}</div>
    </div>
  )
}


export default App;
