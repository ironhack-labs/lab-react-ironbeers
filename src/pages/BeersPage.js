import { AllBeers } from "../components/AllBeers";
import { Link } from "react-router-dom";

export const BeersPage = (props) => {
  return (
    <div>
      <h1>Beers Page</h1>
      <ul>
        {props.beers.map((beer) => {
          return (
            <Link
              to={`/beers/${beer._id}`}
              key={beer._id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <AllBeers beer={beer} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
