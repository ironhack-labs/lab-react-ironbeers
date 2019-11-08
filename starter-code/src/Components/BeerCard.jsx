import React from 'react';

const BeerCard = (props) => {

  const { id, name, image, tagline, contributed_by } = props;

  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <a href={`/beers/${id}`}>
            <img src={image} className="card-img" alt="beer" style={{width: '50px', margin: '15px 0'}}/>
          </a>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{tagline}</p>
            <p className="card-text"><small className="text-muted"><strong>Create by: </strong>{contributed_by}</small></p>
      </div>
    </div>
  </div>
</div>
  )

}

export default BeerCard;