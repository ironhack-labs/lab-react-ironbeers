import { Link } from "react-router-dom";

const Detail = ({ image_url, name, tagline, contributed_by, _id }) => {
  const shortContributor = contributed_by.split(" ").splice(0, 2).join(" ");

  return (
    <Link to={`/beers/${_id}`} className="link">
      <div className="detail-container">
        <div className="img">
          <img src={image_url} alt={name} />
        </div>
        <div className="text">
          <h1>{name}</h1>
          <div>
            <h3>{tagline}</h3>
            <p>
              <span>Created by:</span> {shortContributor}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Detail;
