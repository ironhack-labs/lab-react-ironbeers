import React from 'react';

export default function Beer(props) {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.singleBeer.image_url} className="card-img" alt={props.singleBeer.name} style={{height: "150px", width: "75px"}} />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{props.singleBeer.name}</h3>
                    <p className="card-text">{props.singleBeer.tagline}</p>
                    <span className="card-text">
                        <strong>Created by: </strong>
                        {props.singleBeer.contributed_by}
                    </span>
                </div>
            </div>
        </div>
    )
}