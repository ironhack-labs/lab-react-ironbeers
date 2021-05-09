import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import beersImage from '../../assets/random-beer.png';

function RandomBeer() {
    return(
        <div>
                        <PageHeader image={beersImage} title="Random Beer" description="Lorem ipsum"/>
        </div>
    )
}

export default RandomBeer;