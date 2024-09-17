import { Link } from "react-router-dom";

const BeerCard = ({ image_url, _id, name, tagline, contributed_by }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image_url} className="card-img-top" alt={name}  />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{tagline}</p>
                <p className="card-text">Contributed by: {contributed_by}</p>
                <Link to={`/beers/${_id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default BeerCard;