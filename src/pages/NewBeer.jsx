import React from "react";
import { Link } from "react-router-dom";

function NewBeer() {


  return (
    <div>
      {" "}
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>
      <div>
        <h1>Create a New Beer</h1>
        <form>
          <label>Name Your Beer:</label>
          <input />

          <label>Tagline:</label>
          <input />

          <label>Made By:</label>
          <input />

          <label>Description:</label>
          <input/>


          <button>Brew!</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
