import React from 'react';
import { Link } from 'react-router-dom';

function ListBeers(props) {
  return (
    <div className="page-content">
      <header>
        <Link to="/" className="home-link">
          Home
        </Link>
      </header>
      <div>
        {props.beersArr.map((beerObj) => {
          return (
            <div className="beer-container" key={beerObj._id}>
              <div className="beer-image-box">
                <img src={beerObj.image_url} alt={beerObj.name + 'image'} />
              </div>
              <div className="beer-description">
                <Link to={`/beer/${beerObj._id}`} className="beer-name-link">
                  <h2>{beerObj.name}</h2>
                </Link>
                <h3>{beerObj.tagline}</h3>
                <p>
                  <strong>Created by: </strong>
                  {beerObj.contributed_by}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListBeers;
