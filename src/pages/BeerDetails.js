import React from 'react';
import { useParams } from 'react-router-dom';

export default function BeerDetails(props) {

    const { beerId } = useParams();

    const beer = props.beers.find(beer => beer._id === beerId);

    return (
        <div className="BeerDetails">
            <img src={ beer.image_url } alt={ beer.name } />
            <div className="align-left">
                <div className="flex-row-apart">
                    <h2>{ beer.name }</h2>
                    <h2 className="text-grey">{ beer.attenuation_level }</h2>
                </div>
                <div className="flex-row-apart">
                    <h3 className="text-grey">{ beer.tagline }</h3>
                    <h4>{ beer.first_brewed }</h4>
                </div>
                <p>
                    { beer.description }
                </p>
                <h6 className="text-grey">{ beer.contributed_by }</h6>
            </div>
        </div>
    )
}
