import React from "react";
import { Link } from "react-router-dom";

const BeerList = props => {
  const arrayOfBeers = props.beers.map(element => {
    return (
      <Link
        key={element._id}
        className="list-group-item list-group-item-action"
        to={"/" + element._id}
      >
        <div className="BeerList">
          <img src={element.image_url} alt="beer" height="30%" />

          <div className="BeerDetails">
            <strong>{element.name}</strong>
            <span>
              <small className="light">{element.tagline}</small>
            </span>
            <span>
              <small>
                <strong>Created by: </strong>
                {element.contributed_by}
              </small>
            </span>
          </div>
        </div>
      </Link>
    );
  });

  return <React.Fragment>{arrayOfBeers}</React.Fragment>;
};

export default BeerList;
