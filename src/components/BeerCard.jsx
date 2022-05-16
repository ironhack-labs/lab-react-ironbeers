import { Link } from "react-router-dom";

function BeerCard(props) {

    const {image_url, name, tagline, contributed_by, _id} = props.beer

  return (
    <div className="d-flex justify-content-center">
    <div className="card mb-3 " style={{maxWidth: "540px", maxHeight: "250px"}}>

    <Link to={`/beers/${_id}`}>
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img-fluid" src={image_url} alt="" />
        </div>
        <div className="col-md-8 ">
          <h2 className="card-title text-start text-muted text-decoration-none">{name}</h2>
          <p className="card-text text-start text-muted text-decoration-none">{tagline}</p>
          <p className="card-text text-start text-muted text-decoration-none"><strong>Created by:</strong> {contributed_by}</p>
        </div>
      </div>
    </Link>

    </div>
    </div>
  );
}

export default BeerCard;
