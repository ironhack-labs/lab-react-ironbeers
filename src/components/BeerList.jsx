import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route, useParams} from 'react-router-dom';
import BeerDetails from '../components/BeerDetails';
import FilterSearch from './FilterSearch';

const URL = 'https://ih-beers-api2.herokuapp.com/beers';

export default function BeerList() {

    const [beers, setBeers] = useState([])
    const [filterBeers, setFilterBeers] = useState([])

    const getBeers = async () => {
        const allBeersResponse = await axios.get(URL)
        setBeers(allBeersResponse.data)
        setFilterBeers(allBeersResponse.data)
    }

    useEffect(() => {
        getBeers()
    }, [])

    // const filterResults = str => {
    //     console.log('line 26', str)
    //     const filterData = filterBeers.filter(beer => {return beer.name.includes(str)})
    //     console.log('line 28', filterData)
    //     setBeers(filterData)
    // }

    const filterResults = filterArray => {
        setBeers(filterArray.data)
    }


    
    return (
        <>
        <div className='home-link'>
        <Link to='/' className='link-edit'>Home</Link>
        </div>
        <FilterSearch filteredResults={filterResults} />
        <ul className='beer-list'>
        {beers.map(beer => {
            return (
            <li>
            <Link to={`/details/${beer._id}`} className='list-link'>
            <img src={beer.image_url} alt={beer.name} />
            <div className='beer-info'>
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h3>Created By: {(beer.contributed_by) ? beer.contributed_by.split('<')[0] : 'unknown'}</h3>
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
