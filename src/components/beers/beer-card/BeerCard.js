import { Link } from "react-router-dom";

function BeerCard({ image_url, name, tagline, contributed_by, _id }) {
  console.log(name)
  return (
    <Link to={`/beers/${_id}`} className="text-decoration-none text-dark">
    <div className="d-flex flex-row" style={{height: 270, width: 800}}>
        <img className="col-2" src={image_url} alt={name} />
      <div className="col-11">
        <h3>{name}</h3>
        <h4 className="text-muted">{tagline}</h4> 
        <p>Creada por: {contributed_by}</p> 
      </div>
    </div>
    <hr />
    </Link>
  )
};

export default BeerCard;