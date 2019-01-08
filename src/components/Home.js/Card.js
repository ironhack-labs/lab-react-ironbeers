import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({creatorA, creator, photo, path, children, getRandom}) => (
  <div className="card" onClick={getRandom}>
    <div>
      <Link to={path}>
        <img className="cover-img" src={photo} alt={creator} />
      </Link>
      <a className="photo-credit" href={creatorA} target="_blank" rel="noopener noreferrer">{creator}</a>
    </div>
    <Link to={path}>
      <div className="card-body">
        <h2>{children}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, omnis natus minima dolores quod quia officiis, alias, ducimus cumque perferendis in eaque ipsa? Nesciunt, assumenda. Omnis aut fuga obcaecati iusto.</p>
      </div>
    </Link>
  </div>
);

export default Card;