import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import beersImage from '../../assets/random-beer.png';
import { useParams } from 'react-router';

function Details() {

    let { beerId } = useParams();
    
    return(
        <div>
            <PageHeader image={beersImage} title="Selected Beer" description="Lorem ipsum"/>
            <h2>{beerId}</h2>
        </div>
    )
}

export default Details;