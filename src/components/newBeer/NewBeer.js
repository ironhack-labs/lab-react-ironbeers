import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import beersImage from '../../assets/new-beer.png';

function NewBeer() {
    return(
        <div>
            <PageHeader image={beersImage} title="New Beer" description="Lorem ipsum"/>
        </div>
    )
}

export default NewBeer;