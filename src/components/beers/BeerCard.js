import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const BeerCard = ({ beer: { image_url, name, tagline, contributed_by, _id } }) => {
    //ya que se deconstruye props beer se puede hacer en el parametro de la funcion en vez de => const { image_url, name, tagline, contributed_by, _id } = props.beer;


    return (
        <div className='card d-flex justify-content-center align-items-center my-5 py-5  text-center'>

            <img className='order-1 w-25 mw-100 mb-4' src={image_url} alt={name} />
            <div className="d-flex flex-column flex-nowrap order-2">
                <Link to={`/beers/${_id}`}><h3>{name}</h3></Link>
                <h4 className="text-muted">{tagline}</h4>
                <p>Created by: {contributed_by}</p>
            </div>
        </div>
    )
}
BeerCard.propTypes = {
    beer: PropTypes.object.isRequired
}
export default BeerCard;
