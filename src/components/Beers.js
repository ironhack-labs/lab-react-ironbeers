import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BeerDetails from "./BeerDetails";

function Beers() {
  const [beers, setBeers] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <>
      <header>
        <Link to="/">
          <i>home</i>
        </Link>
      </header>

        {fetching && <div></div>}
        {beers.map((beer) => (
          
            <div key={beer._id}>
              <img
                style={{ height: "200px" }}
                src={beer.image_url}
                alt=""
              ></img>
                  <h5>
                    <Link
                      class="card-link"
                      to={`/beers/${beer._id}`}
                      element={<BeerDetails beer={beer} />}>
                      {beer.name}
                    </Link>
                  </h5>
                  <h6>{beer.tagline}</h6>
                  <p>created by: {beer.contributed_by}</p>
            <hr />
          </div>
        ))}
    </>
  );
}

export default Beers;
