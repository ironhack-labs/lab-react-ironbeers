import { Link } from "react-router-dom";
import { Beers } from "../components/Beers";
import { NewBeer } from "../components/NewBeer";
import { RandomBeers } from "../components/RandomBeers";

export const HomePage = () => {
  return (
    <div style={{ width: "90%", marginLeft: 60 }}>
      <Link to="/beers" style={{ textDecoration: "none", color: "black" }}>
        <Beers />
      </Link>
      <Link
        to="/random-beer"
        style={{ textDecoration: "none", color: "black" }}
      >
        <RandomBeers />
      </Link>
      <Link to="/new-beer" style={{ textDecoration: "none", color: "black" }}>
        <NewBeer />
      </Link>
    </div>
  );
};
