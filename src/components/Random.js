import React, { useEffect, useState} from 'react';
import axios from 'axios'
import Header from './Header'

function Random() {
    let [allBeers, setAllBeers] = useState([''])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(res => {
            console.log(res.data);
            setAllBeers(res.data);
        })
    }, [])

    let random = Math.floor(Math.random() * allBeers.length)

    return (
        <div>
            <Header/>
            <div>
                <img src={allBeers[random].image_url} alt='' className='beerImg'/>
                <div>
                    <div className='random-row'>
                        <span><h2>{allBeers[random].name}</h2></span>
                        <span><h3>{allBeers[random].attenuation_level}</h3></span>
                    </div>
                    <div className='random-row'>
                        <span><h3>{allBeers[random].tagline}</h3></span>
                        <span><h2>{allBeers[random].first_brewed}</h2></span>
                    </div>
                    <div style={{width:'90vw', margin:'auto'}}>{allBeers[random].description}</div>
                    <h3>{allBeers[random].contributed_by}</h3>
                </div>
            </div>
        </div>
    );
}

export default Random;