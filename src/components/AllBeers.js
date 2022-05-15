import { NavLink } from "react-router-dom";
import Header from "./Header";
import "./AllBeers.css";

function AllBeers({ props }) {
  const beers = props;

  return (
    <div>
      <Header />
      <h1>All Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <h3>{beer.tagline}</h3>
          <h3>{beer.contributed_by}</h3>
          <NavLink to={`/beers/${beer._id}`}>More Details</NavLink>
        </div>
      ))}
      ;
    </div>
  );
}
export default AllBeers;
