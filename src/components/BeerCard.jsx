import { Link } from "react-router-dom";

function BeerCard(props) {

    const {image_url, name, tagline, contributed_by, _id} = props.beer

  return (
    <Link to={`/beers/${_id}`}>
      <div>
        <div>
          <img src={image_url} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{tagline}</p>
          <p><strong>Created by:</strong> {contributed_by}</p>
        </div>
      </div>
    </Link>
  );
}

export default BeerCard;
