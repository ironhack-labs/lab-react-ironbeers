import React from 'react';
import './BeerList.css'

const BeerList = ({name,id,image_url,tagline,contributed_by}) => {
    return (

        <div className="card mb-3" key={id} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image_url} className="img-fluid rounded-start" alt={name}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{tagline}</p>
                        <p className="card-text"><small className="text-muted">Created by {contributed_by}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeerList;