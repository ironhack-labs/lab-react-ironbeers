import React from 'react'
import { useParams } from 'react-router-dom'


function BeerDetail({ beersData }) {
  const { id } = useParams();


  return (
    <div>
      {beersData.filter(beer => beer._id.includes(id)).map(beer =>
        <div className="row g-0 m-3" key={beer._id}>
          <div className="col-md-4">
            <img src={beer.image_url} className="img-fluid rounded-start" alt="beerPicture" style={{ width: 100 }} />
          </div>
          <div className="col-md-8 d-flex align-items-center ">
            <div className="card-body">
              <h1 className="card-title mb-5 mt-5">{beer.name}</h1>
              <h3 className="card-text text-secondary">{beer.tagline}</h3>
              <h3 className="card-text">{beer.first_brewed}</h3>
              <h3 className="card-text text-secondary">{beer.attenuation_level}</h3>
              <p className="card-text text-secondary">{beer.description}</p>
              <p className="card-text"><small className="">{beer.contributed_by}</small></p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default BeerDetail