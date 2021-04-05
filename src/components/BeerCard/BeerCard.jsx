import React from 'react';

const BeerCard = ({beer}) => {
    
    return (
        (<div className="container" key={beer._id}>
            <div className="col-xl-10 col-xxl-12">
                <div className="row">
                    <div className="col m-5">
                        <img src={beer.image_url} alt={beer.name} width="80px"/>
                    </div>
                </div>

                <div className="row m-3 justify-content-between">
                    <div className="col-8">
                        <h1>{beer.name}</h1>
                    </div>
                    <div className="col-4">
                        <h1>{beer.attenuation_level}</h1>
                    </div>
                </div>

                <div className="row m-3 justify-content-start">
                    <div className="col-8">
                        <h5>{beer.tagline}</h5>
                    </div>
                    <div className="col-4">
                        <h6><b>{beer.first_brewed}</b></h6>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col">
                        <h5 className="text-justify">{beer.description}</h5>    
                    </div>
                </div>

            </div>

        </div>)
        )
    
}

export default BeerCard;