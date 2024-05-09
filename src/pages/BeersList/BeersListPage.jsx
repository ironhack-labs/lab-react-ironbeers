import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './BeersListPage.css';

function BeersListPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="BeersList">
      {beers.map(beer => (
          <div key={beer._id} className="card mb-3" style={{ maxWidth: "540px", border: '0', boxShadow: 'none'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  className="card-img-top"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <Link to={`/beers/${beer._id}`} key={beer._id} className="beer-link">
                  <h3 className="card-text">{beer.name}</h3>
                </Link>  
                  <h6 className="card-text">{beer.tagline}</h6>
                  <p className="card-text"><strong>Created by:</strong> {beer.contributed_by}</p>
                </div>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default BeersListPage;
