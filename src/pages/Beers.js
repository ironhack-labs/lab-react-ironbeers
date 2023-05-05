import { Link } from "react-router-dom";
import HeaderImage from "../assets/header.png";



function Beers(props) {


  return (
    <div>
      <header>
        <Link to="/">
          <img src={HeaderImage} alt="Header" />
        </Link>
      </header>

      <div>
        <h3>List of beers</h3>
        {props.beers?.map((beer) => (
          <div key={beer._id} className="card">
            <img src={beer.image_url} alt="apartment" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>
              <b>Created by: </b>
              {beer.contributed_by}
            </p>
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beers;
