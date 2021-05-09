import React from 'react';
import '../components/Card.css';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="card-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
