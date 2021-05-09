import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import beersImage from '../../assets/random-beer.png';
import { useParams } from 'react-router';

function Details() {

    let { beerId } = useParams();
    
    return(
        <div>
            <PageHeader image={beersImage} title="Details" description="Lorem ipsum"/>
        </div>
    )
}

export default Details;