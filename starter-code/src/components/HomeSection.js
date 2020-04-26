import React from 'react';
import { Link } from 'react-router-dom';

const HomeSection = ({ URL, image, title, description }) => {
  return (
    <div className='home-tile'>
      <Link to={URL}>
        <img alt={title} src={image} />
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default HomeSection;
