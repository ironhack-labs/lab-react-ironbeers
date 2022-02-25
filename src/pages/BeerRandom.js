import { useState, useEffect } from "react"; // <== IMPORT useEffect
import axios from "axios"; // <== IMPORT axios
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";

function BeerRandom(props) {
  const [beer, setBeer] = useState([]);
  let api = "https://ih-beers-api2.herokuapp.com/beers/random";

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get(api).then((response) => {
      //console.log("response.data", response.data);
      setBeer(response.data);
    });
  }, []); // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <h3>Random Beer</h3>
      <Link to={`beers/${beer._id}`} key={beer._id}>
        <div className="card">
          <img src={beer.image_url} alt="beer" />
          <h3>Name:{beer.name}</h3>
          <p>Tagline: {beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      </Link>
    </div>
  );
}

export default BeerRandom;
