import React from 'react';
import { Link } from 'react-router-dom';
import SearchBeer from './SearchBeer';

const listBeers = (props) => {
  const { beers } = props;
  console.log(' ListBeers ->  ', beers);

  return (
    <div>
      <h2> List of All Beers </h2>
      <SearchBeer searchBeer={props.searchBeer} />
      <ul>
        {beers.map(({ _id, image_url, name, tagline, contributed_by }) => (
          <li
            className="list-group"
            style={{ display: 'flex', fleDirection: 'column' }}
            key={_id}
          >
            <div className=" list-group-item">
              <img
                src={image_url}
                atl=""
                style={{ height: '70px', width: '25px' }}
              />
              <div>
                <Link to={`/beers/${_id}`}>
                  <h4> {name} </h4>
                </Link>

                <strong> {tagline} </strong>
                <sub> {contributed_by} </sub>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default listBeers;
