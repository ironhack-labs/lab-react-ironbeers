import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Beers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios("https://ih-beers-api2.herokuapp.com/beers");
      setBeers(data);
    };
    getBeers();
  }, []);
  return (
    <div>
      {beers.map((beer) => {
        return (
          <Link className="beer-link" to={`/beerDetail/${beer._id}`}>
            <div className="beer-box" key={beer._id}>
              <img width={"50px"} src={beer.image_url} alt={beer.name} />
              <div>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Beers;
