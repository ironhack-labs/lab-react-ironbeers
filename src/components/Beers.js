import React from "react";

const Beers = ({beers}) => {
  console.log(beers)
  return (
    <div>
      <main
  class='container text-center d-flex flex-column alto justify-content-center  mt-4'
>
      {beers.map(beer => {
        return (
      <div className='col-12 col-xl-10 mt-2 border-bottom' key={beer._id}>
        <div className="row my-3">
        <div className='col-4 '>
          <a href={`/beers/${beer._id}`}>
            <img
              src={`${beer.image_url}`}
              alt={`Poster for ${beer.name}`}
              class='col-4'
            />
          </a>
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