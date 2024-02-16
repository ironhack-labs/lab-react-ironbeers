import { Link } from "react-router-dom";

const BeerCard = ({ image_url, _id, name, tagline, contributed_by }) => {
  return (
    <div className="container my-5">
      <div className="card row flex-row h-100" style={{ width: "18rem" }}>
        <img
          src={image_url}
          className="card-img-start col-lg-4 img-fluid p-0"
          alt={name}
        />
        <div className=" col-lg-8 card-body">
          <h5 className="card-title"> {name}</h5>
          <p className="card-text">{tagline}</p>
          <p className="card-text">Contributed by: {contributed_by}</p>
          <Link to={`/beers/${_id}`} className="btn btn-primary">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
