import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Created by{" "} <a href="https://abhishekrawat.onrender.com/" target="_blank" >Abhishek Rawat</a>
      </div>
    </React.Fragment>
  );
}

export default App;
