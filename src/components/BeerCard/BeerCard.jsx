import './BeerCard.css'
import { Link } from 'react-router-dom'

const BeerCard = ({ beer }) => {
    return (
        <div className="card">
            <img src={beer.image_url} className="card-img-top" alt={beer.name} />
            <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">{beer.tagline}</p>
                <p className="card-text">Created by: {beer.name}</p>
                <Link to={`/beers/${beer._id}`} className="btn btn-primary">Detalles</Link>
            </div>
        </div>
    )
}

export default BeerCard