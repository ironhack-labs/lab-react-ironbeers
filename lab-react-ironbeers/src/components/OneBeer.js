import React from 'react'

const OneBeer = ({name, image_url, tagline, contributed_by}) => {
    return (
        <div className="col-md-4">
           <div className="card">
                <img className="card-img-top" src={image_url} alt="Card cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{tagline}</h5>
                    <h5 className="card-title">Created by: {contributed_by}</h5>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default OneBeer