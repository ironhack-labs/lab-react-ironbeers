import { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";

function BeerDetails(props) {
  console.log(props);
  const [foundBeer, setFoundBeer] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    let selectedBeer = props.BeerDetails.find((item) => item._id === _id);
    setFoundBeer(selectedBeer);
  }, [_id]); // <- [] means: Run the effect only once, after initial render

  if (!foundBeer) {
    return <p className="col-7"> Loading... </p>;
  }

  return (
    <div>
      <h1>Beer Details</h1>
      <Link to={"/"}>
        <header className="color">
          <img src="" />
        </header>
      </Link>
      <Link to={`/`} key={foundBeer._id}>
        <div className="card">
          <img src={foundBeer.image_url} alt="item" />
          <h3>Name:{foundBeer.name}</h3>
          <p>Tagline: {foundBeer.tagline}</p>
          <p>First Brewed {foundBeer.first_brewed}</p>
          <p>Attenuation Level {foundBeer.attenuation_level}</p>
          <p>Description {foundBeer.description}</p>
          <p>Contributed By {foundBeer.contributed_by}</p>
        </div>
      </Link>
    </div>
  );
}

export default BeerDetails;
