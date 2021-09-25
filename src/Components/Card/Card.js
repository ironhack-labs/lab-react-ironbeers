import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({link, image, title, text}) => {
  return (
    <div>
      <div className=" column card col-4 mb-3" style={{ width: '500px' }}>
        <div>
          <Link to={link}>
            <img width="500px" src={image} alt="beerimage" />
            <h1 className="text-black">{title}</h1>
            <p className="text-black">
             {text}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card
