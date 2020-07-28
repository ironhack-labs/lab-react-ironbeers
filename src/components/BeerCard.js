import React from 'react'

const BeerCard = props => {
    return (
        <div className="card mx-auto" style={{width:"18rem"}}>
            <img className="card-img-top mx-auto" src={props.image_url} style={{width:"100px"}} alt="Card cap" />
            <div className="card-body">
                <div className="row d-flex justify-content-between my-2">
                    <h5 className="card-title">{props.name}</h5>
                    <h5 className="card-title">{props.attenuation_level}</h5>
                </div>
                <div className="row d-flex justify-content-between my-2">
                    <span className="card-text">{props.tagline}</span>
                    <span className="card-text">{props.first_brewed}</span>
                </div>
                <div className="row d-flex text-left">
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerCard
