import { Link } from 'react-router-dom';
import './BeerCard.css';

const BeerCard = ({ _id, image_url, name, tagline, contributed_by }) => {
  return (
    <Link to={`/beers/${_id}`}>
      < article className='beer card'>
      <img src={image_url} alt="" />

      <div className="info">
        <h2>{name}</h2>
        <p className='tagline'>{tagline}</p>
        <p className='created-by'>Created by: {contributed_by?.replace(/ <.*/g, '')}</p>
      </div>
    </article >
    </Link>
  )
}

export default BeerCard;