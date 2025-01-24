import { Link } from "react-router-dom";

function BeerCard({ beer }) {
  return (
    <div className="d-flex justify-content-center mb-3 ">
      <Link to={`/beers/${beer._id}`}>
        <div className="card bg-light-subtle container-fluid" style={{ maxWidth: "20rem" }}>
          <div className="container d-flex justify-content-center">
            <img
              className="card-img-top img-fluid mt-4"
              src={beer.image_url}
              alt="beer"
              style={{ width: "7.5rem", height: "7.5rem", objectFit: "contain" }}
            />
          </div>
          <div className="card-body">
            <h6 className="card-title text-center">{beer.name}</h6>
            <p className="card-text text-center fst-italic text-secondary-emphasis">
              {beer.tagline}
            </p>
            <p className="card-text text-center fw-medium">Created by: {beer.contributed_by}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BeerCard;
