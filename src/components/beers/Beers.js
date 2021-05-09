import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import beersImage from '../../assets/beers.png';

function Beers() {
    return(
        <div>
            <PageHeader image={beersImage} title="All Beers" description="Lorem ipsum"/>
        </div>
    )
}

export default Beers;