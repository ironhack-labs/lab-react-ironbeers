import React from 'react';

function ItemListBeers({beer, i}) {

  return (
    <div className="row" id={i}>
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal d-flex">
                    <div className="img-square-wrapper image-item-beers text-center w-25">
                        <img className="h-100 p-3" src={beer.image_url} alt={beer.name}/>
                    </div>
                    <div className="card-body w-75">
                        <h4 className="card-title">{beer.name}</h4>
                        <h6 className="card-text text-muted">{beer.tagline}</h6>
                        <p>Created by:  <strong>{beer.contributed_by}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemListBeers;

