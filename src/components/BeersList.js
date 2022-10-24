import Header from "../components/Header";
import { Link } from "react-router-dom";


function BeersList(props) {
    return (
    <div>
      <Header />
      {props.beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>More Details</Link>
            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
