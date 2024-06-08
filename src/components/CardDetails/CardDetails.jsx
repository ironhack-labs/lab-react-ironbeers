import { Link } from "react-router-dom";

const CardDetails = ({ image_url, name, description, route}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image_url}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {description}
            </p>
            <Link to={route} className="btn btn-danger">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
