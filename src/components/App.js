import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const[second , setSecond] = useState(0);
  
  function reverseCount(event) {
    let cntValue = event.target.value;
    setSecond(cntValue);
  }

  useEffect(() => {
    if (second > 0) {
      setTimeout(() => setSecond(second-1), 1000);
    } else {
      setTimeout(0);
    }
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
