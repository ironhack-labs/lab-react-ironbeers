import AllBeers from "../components/AllBeers";
import NewBeer from "../components/NewBeer";
import RandomBeer from "../components/RandomBeer";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div>
      <NavLink to={"/"}></NavLink>
      <AllBeers />
      <NewBeer />
      <RandomBeer />
    </div>
  );
}

export default Main;
