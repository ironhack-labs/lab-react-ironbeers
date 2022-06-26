import { Link } from "react-router-dom";

const BeerCard = ({ _id, image_url, name, tagline, contributed_by }) => {
  return (
    <Link to={`/allbeers/${_id}`}>
      <article className="beer-card">
        <img src={image_url} alt={name} height='150px' />

        <div className="info">
          <h2>{name}</h2>
          <p className="tagline">{tagline}</p>
          <p className="created-by">
            Created by: {contributed_by?.replace(/ <.*/g, "")}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BeerCard;
