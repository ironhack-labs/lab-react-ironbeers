import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Header from './Header'

function AllBeers() {
    let [allBeers, setAllBeers] = useState([''])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(res => {
            console.log(res.data);
            setAllBeers(res.data);
        })
    }, [])

    const ShowBeers = () => {
        return allBeers.map(eachBeer => {
            return (
                <div className='beerRow'>
                    <img className='beerImg' src={eachBeer.image_url}/>
                    <div className='beerInfo'>
                        <Link to={`allbeers/${eachBeer._id}`}><h2>{eachBeer.name}</h2></Link>
                        <h3>{eachBeer.tagline}</h3>
                        <h3>Created by: {eachBeer.contributed_by}</h3>
                    </div>
                </div>
            );
        })
    }

    return (
        <div>
            <Header/>
            {ShowBeers()}
        </div>
    );
}

export default AllBeers;