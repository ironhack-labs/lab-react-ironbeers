import { Link } from 'react-router-dom'

function BeerCard({image_url, _id, name, tagline, contributed_by }) {

  return (
    <Link to={`/beers/${_id}`}>
      <div className="beercard">
        <div className='beercard-image'>
          <img src={image_url} alt="beer img" />
        </div>
        <div className='beercard-text'>
          <h2>{name}</h2>
          <h3>{tagline}</h3>
          <p><b> Created by:</b>{contributed_by}</p>
        </div>
      </div>
      <hr />
    </Link>
  );
};

export default BeerCard;