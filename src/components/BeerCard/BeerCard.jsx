import './BeerCard.css'
import { Link } from 'react-router-dom'



const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {



    return (
        <div className='card mt-3 BeerCard'>
            <img src={image_url} className="card-img-top" alt={name} />
            <div className="card-body">
                <h2 className='card-title'>{name}</h2>
                <h5 className="card-text">{tagline}</h5>
                <p className="card-text">{contributed_by}</p>
                <Link to={`${_id}`} className="btn btn-primary">Detalles</Link>
            </div>
        </div>
    )
}

export default BeerCard



