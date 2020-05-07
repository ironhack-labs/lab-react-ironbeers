import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="cards">
      <Link className="card__link" to={props.link}>
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </Link>
    </div>
  )
}

export default Card
