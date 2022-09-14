import './ItemBeer.css';

import { Link } from 'react-router-dom';

function ItemBeer({ _id, image_url, name, tagline }) {
  return (
    <div className="item-beer">
      <Link to={`/${_id}`}>
        <div className="row justify-content-center my-4">
          <div className="col-2 d-flex align-items-center justify-content-center">
            <img className="item-beer__picture" src={image_url} alt={name} />
          </div>
          <div className="col-8 d-flex flex-column justify-content-start">
            <h3>{name}</h3>
            <h5 className="text-secondary">{tagline}</h5>
            <p><strong>Created by: </strong>{name}</p>
          </div>
        </div>
      </Link>
      <hr />
    </div>
  )
}

export default ItemBeer;