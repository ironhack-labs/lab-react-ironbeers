import { useEffect, useState } from "react";
import { getBeers } from "../services/servise";
import { Link } from "react-router-dom";

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers()
      .then((beersApi) => setBeers(beersApi))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">All Beers</h2>
      {beers.map((beer) => (
        <div className="card mb-3" key={beer._id}>
          <Link
            to={`/beers/${beer._id}`}
            className="text-decoration-none text-dark"
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={beer.image_url}
                  className="img-fluid"
                  alt={beer.Name}
                  style={{ objectFit: "cover", height: "100px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{beer.Name}</h2>
                  <p className="card-text">{beer.tagline}</p>
                  <p className="card-text">{beer.contributed_by}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllBeersPage;
