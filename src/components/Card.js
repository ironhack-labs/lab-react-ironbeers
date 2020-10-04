//import packages
import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
  // retrieves 'info' property
  const { info } = props;

  // renders homepage cards
  return (
    <Link to={info.link}>
      <div className='card'>
        <div className='card-img'>
          <img alt={info.title} src={info.url} />
        </div>
        <div className='card-content'>
          <h2 className='card-title'>{info.title}</h2>
          <p className='card-desc'>{info.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;