import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  console.log(props.match.path);
  return (
    <div>
      <Link to="/beers">
        <div>Beers</div>
      </Link>
      <Link to="/new-beer">
        <div>New Beer</div>
      </Link>
      <Link to="/random-beer">
        <div>RandomBeer</div>
      </Link>
    </div>
  );
}
