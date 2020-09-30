import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className="card mb-4">
      <Link to={`${props.link}`} className="text-decoration-none text-dark">
        <img src={props.url} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Lorem fistrum hasta luego Lucas mamaar se calle ustée hasta luego
            Lucas diodenoo a gramenawer. Fistro jarl sexuarl por la gloria de mi
            madre. Mamaar está la cosa muy malar tiene musho peligro no te digo
            trigo por no llamarte Rodrigor apetecan no te digo trigo por no
            llamarte Rodrigor ese que llega.
          </p>
        </div>
      </Link>
    </div>
  );
}
