import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//import Header
import Header from "../Components/NavBar/index";

function ListAllBeers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="list-all-beers">
        {beers.map((beer) => (
          <Link to={`/beers/${beer._id}`}>
            <div key={beer._id} className="beer-card">
              <div className="list-all-beers-img">
                <img src={beer.image_url} alt="beer" />
              </div>
              <div className="list-all-beers-info">
                <h3>{beer.name}</h3>
                <h2>{beer.tagline}</h2>
                <p>
                  <b>Created by:</b>
                  {beer.contributed_by}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListAllBeers;