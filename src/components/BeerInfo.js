import React from 'react';

function BeerInfo(props){
    const beer = props.beer;
    
    return (
        <div>
            <img src={beer.image_url} alt={beer.name} />
            
            <div>
                <div>
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                </div>

                <div>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.first_brewed}</p>
                </div>
            </div>
            <p>{beer.description}</p>
            <span>{beer.contributed_by}</span>

        </div>
    )
}

export default BeerInfo;