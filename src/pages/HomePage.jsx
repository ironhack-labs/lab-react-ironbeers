import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h1>Welcome to World of Beers and Cheers</h1>
      <Link to="/beers">
        <img src="../src/assets/beers.png" alt="All Beers"/>
        All Beers
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta consequatur repellendus perspiciatis, delectus natus corrupti repellat! Incidunt, doloribus. Ipsam.</p>
      <Link to="/random-beer">
        <img src="../src/assets/random-beer.png" alt="Random Beer" />
        Random Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit harum dolorum quod esse fugit tenetur id possimus nisi magnam.</p>
      <Link to="/new-beer">
        <img src="../src/assets/new-beer.png" alt="New Beer" />
        New Beer</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis illum repellendus debitis harum fugiat reiciendis delectus. Nisi, in debitis!</p>
    </div>
  );
}

export default HomePage;
