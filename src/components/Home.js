import React from "react";
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <NavLink to={"/beers"}>
      <img className="home-Image" src="./beers.png" alt="a view of a pub bar" /> 
      </NavLink>
      <h1> All Beers</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
        consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum
        dolor sit amet, consectetur adip
      </p>
      <NavLink to={"/random-beer"}>
      <img
        className="home-Image"
        src="./random-beer.png"
        alt="a close up view of a pub bar"
      />
      </NavLink>
      <h1> Random Beer</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
        consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem
        ipsum dolor sit amet, consectetur adip{" "}
      </p>
      <NavLink to={"/new-beer"}>
      <img
        className="home-Image"
        src="./new-beer.png"
        alt="a view of a bottle of beet and a pint"
      /></NavLink>
      <h1> New Beer</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
        consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem
        ipsum dolor sit amet, consectetur adip{" "}
      </p>
    </div>
  );
};

export default Home;

// three diffeerent options - show all beers, random beer and new beer
