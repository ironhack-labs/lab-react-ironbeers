import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route, useParams} from 'react-router-dom';
import BeerDetails from '../components/BeerDetails';

const URL = 'https://ih-beers-api2.herokuapp.com/beers';

export default function BeerList() {

    const [beers, setBeers] = useState([])

    const getBeers = async () => {
        const allBeersResponse = await axios.get(URL)
        console.log('line 12', allBeersResponse.data)
        setBeers(allBeersResponse.data)
    }

    useEffect(() => {
        getBeers()
    }, [])


    
    return (
        <>
        <ul className='beer-list'>
        {beers.map(beer => {
            return (
            <li>
            <Link to={`/details/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} />
            <div className='beer-info'>
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h3>Created By: {beer.contributed_by}</h3>
            </div>
            </Link>
            </li>
            )
        })}
        </ul>

        {/* <Router>
        <Switch>
            <Route path='/details/:id' exact >
                <BeerDetails />
            </Route>
        </Switch>
        </Router> */}
        </>
    )
}
