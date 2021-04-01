import React from 'react'

const BeerContent = ({ image_url, name, tagline, description, contributed_by }) => {
    return (
        <div className="row text-center text-md-left">
            <div className="col-sm-3">
                <img src={image_url} style={{ maxHeight: '250px' }} alt={name} />
            </div>
            <div className="col-sm-9">
                <div className="heading mb-3">
                    <h1 className="mb-0">{name}</h1>
                    <small className="text-muted">{tagline}</small>
                </div>
                <p>{description}</p>
                <small className="text-muted"><strong>Created by:</strong> {contributed_by}</small>
            </div>
        </div>
    )
}

export default BeerContent
