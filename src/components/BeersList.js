import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const BeersList = (props) => {
  return (
    <>
      <NavBar />

      {props.beers.map((beer) => {
        return (
          <div className="card">
            <br />
            <img src={beer.image_url} alt={beer.name} />
            <br />
            <NavLink to={`/beers/${beer._id}`} key={beer._id}>
              {beer.name}
            </NavLink>
            <br />
            <h4>{beer.tagline}</h4>
            <br />
            <h3>{beer.contributed_by}</h3>
          </div>
        );
      })}
    </>
  );
};

export default BeersList;
