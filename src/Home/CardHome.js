import React from 'react';
import { Link } from 'react-router-dom';

function CardHome(props) {
  return (
    <div className="home-card">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Link to={props.link} className="df-jc-ac">
        <button className="btn">{props.title}</button>
      </Link>
    </div>
  );
}

export default CardHome;
