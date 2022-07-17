import React from "react";
import { Link } from 'react-router-dom'

const Beers = ({beers}) => {
  console.log(beers)
  return (
    <div>
      <main
  className='container text-center d-flex flex-column alto justify-content-center  mt-4'
>
      {beers.map(beer => {
        return (
      <div className='col-12 col-xl-10 mt-2 border-bottom' key={beer._id}>
        <div className="row my-3">
        <div className='col-4 '>
          <Link to={`/beers/${beer._id}`}>
          
            <img
              src={`${beer.image_url}`}
              alt={`Poster for ${beer.name}`}
              className='col-4'
            />
          </Link>
        </div>
        <div className="col-8 text-start">
          <h2>
            {beer.name}
          </h2>
          <p className='text-black-50'>
            {beer.tagline}
          </p>
          <p className='text-black'>
            <strong className="fw-bolder">Created by: </strong> {beer.contributed_by}
          </p>
        </div>
        </div>
      </div>
       );
      })}
      </main>
    </div>
  );
};

export default Beers;