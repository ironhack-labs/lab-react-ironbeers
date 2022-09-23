import { Link } from 'react-router-dom'

export default function BeerCard(props) {
  const {beer} = props
  return (
    <Link className="card-link" to={beer._id}>

    <div  className="beer-card">
      <img src={beer.image_url} alt="" />
      <div className="text-holder">
        <h3>{beer.name}</h3>
        <h4>{beer.tagline}</h4>
        <span>Added by: {beer.contributed_by}</span>
      </div>
    </div>
    </Link>
  )
}