import React from "react";
import Navbar from "./Navbar";

const NewBeer = props => {
  return (
    <div>
      <div> 
        <Navbar />
        <img src="/src/assets/beers.png" alt="beers" />
        <h3>Welcome to my portfolio page! My name is</h3>
        <p>and I'm Web Developer!</p>
      </div>
    </div>
  );
};

export default NewBeer;