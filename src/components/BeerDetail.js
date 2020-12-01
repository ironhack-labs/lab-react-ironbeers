// Iteration 4 | Display a single beer
//not completed, will be continued
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'

const BeerDetail = (props) => {
    const [beerState, setBeerState] = useState({
        _id: '',
        image: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: 0,
        description: '',
        contributed_by: '',
    });

    useEffect(() => {
        const fetchBeers = async () => {
            const beersDetailData = await axios.get(
                'https://ih-beers-api2.herokuapp.com/beers'
            );
            setBeerState(beersDetailData.data);
        };
        fetchBeers();
    }, [props]);

    return (
        <div className='beerDetailPage'>
            <Nav />
            <div key={beerState._id}>
                <div>
                    <img src={beerState.image_url} className="beerDetailImg" alt="detailImg" />
                </div>
                <div>
                    <h1>{beerState.name}</h1>
                    <h3>{beerState.tagline}</h3>
                    <h2>{beerState.attenuation_level}</h2>
                    <p>{beerState.first_brewed}</p>
                    <p>{beerState.description}</p>
                    <h4>{beerState.contributed_by}</h4>
                </div>
            </div>

        </div>
    );
};

export default BeerDetail;