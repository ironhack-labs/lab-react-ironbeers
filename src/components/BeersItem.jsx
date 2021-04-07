import React from 'react';
import '../assets/css/BeersItem.css'

const BeersItem = ({ name, image_url, tagline, contributed_by}) => {
    return (
        <>
            <div className="card-img-beer">
                <img src={image_url} alt={name} style={{width:'60px', height:'150px'}}/>
            </div>
            <div className="col">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{tagline}</p>
                    <p className="card-text"><small className="text-muted">{contributed_by}</small></p>
                </div>
            </div>
      </>
    );
};

export default BeersItem;