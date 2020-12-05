import React from 'react';
import { Link } from 'react-router-dom';

function CardHome(props) {
  return (
    <card className="home-card">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Link to={props.link}>
        <button>{props.title}</button>
      </Link>
    </card>
  );
}

export default CardHome;
