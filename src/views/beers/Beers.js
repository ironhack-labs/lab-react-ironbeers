import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/misc/Navbar'
import './Beers.css';
/* import Beer from "./Beer"; */

const Beers = () => {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((getBeers) => {
      setBeers(getBeers.data);
    });
  }, []);

  return beers ? (
      <div>
      <Navbar />
      {beers.map((beer) => {
        return (
          <div className="beerContainer">
            <div className="card mb-3 w-100 pt-2">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={beer.image_url}
                    className="img-fluid rounded-start "
                    alt={beer.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <Link to={`/beers/${beer._id}`} className="beersName">{beer.name}</Link>
                    <p className="card-text fs-4 text-muted">{beer.tagline}</p>
                    <p className="card-text">
                      <small className="fs-6 fw-bold">
                        Created by: {beer.contributed_by}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="mt-2 text-center">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Beers;
