import React from 'react'

const BeerCard = props => {

    return (
        
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={props.image_url} className="card-img imgBeerCard" alt={props.name} />
                    </div>
                    <div className="col-md-8 divCard">
                        <div className="card-body">
                        <h3 className="card-title">{props.name}</h3>
                        <p className="card-text description">{props.tagline}</p>
                        <p className="card-text">{props.contributed_by}</p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default BeerCard