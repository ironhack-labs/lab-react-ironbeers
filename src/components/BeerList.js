import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';

export default function BeerList(props) {
    return (
      <>
        <Header />
        <div className="lists">
          <ul>
            {props.beers.map((beer) => {
              return (
                <li key={beer._id}>
                  <img style={{maxWidth:'2rem',height:'auto'}} src={beer.image_url} />
                  <Link to={`/beers/beer${beer._id}`}>
                    <h3>{beer.name}</h3>
                  </Link>
                  <h5>{beer.tagline}</h5>
                  <p>
                    <span>Created by</span>:{' '}
                    {beer.createdBy ? beer.createdBy : beer.name}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
}
