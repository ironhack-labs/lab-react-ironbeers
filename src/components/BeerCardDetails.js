import { Link } from "react-router-dom";

function BeerCardDetails(props) {
  return (
    <div className="container-fluid d-flex justify-content-around align-items-center  beer-details">
      <img
        className="beer-img"
        src={props.beer.image_url}
        alt={props.beer.name}
      ></img>
      <div className="container-fluid d-flex flex-column justify-content-around align-items-center">
        <h4>{props.beer.name}</h4>
        <p className="tagline">{props.beer.tagline}</p>
        <p>{props.beer.contributed_by}</p>
        <Link className="link" to={`/beers/${props.beer._id}`}>
          See details
        </Link>
      </div>
    </div>
  );
}

export default BeerCardDetails;
