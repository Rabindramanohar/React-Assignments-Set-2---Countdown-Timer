import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const[second , setSecond] = useState(0);
  
  function reverseCount(event) {
    let cntValue = Math.floor(parseInt(event.target.value));
    // if(cntValue < 0)
    //   setSecond(0);
    setSecond(cntValue);
    if(event.keyCode !== 13)
      return;
  }

  useEffect(() => {
    let val = null;

    if(second > 0) {
      val = setTimeout(() => setSecond(second-1), 1000);
    } else {
      val = setSecond(0);
    }

    return () => clearInterval(val)
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" type = "number" onKeyDown={reverseCount} />{" "}sec.
        </h1>
      </div>
      <div id="current-time">{second}</div>
    </div>
  )
}


export default App;
