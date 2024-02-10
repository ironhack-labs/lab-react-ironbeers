import { Link } from "react-router-dom"
import "./BeerCard.css"

const BeerCard = ({ img, name, description, _id }) => {
  return (
<div className="card h-100">
  <center><img src={img} className="img-card" alt={name} /></center>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <Link to={`/all-beers/${_id}`} className="text-decoration-none">Read more</Link>
  </div>
</div>
  )
}

export default BeerCard


