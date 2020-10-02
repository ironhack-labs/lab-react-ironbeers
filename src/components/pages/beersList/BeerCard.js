import React from 'react'
import { Link } from 'react-router-dom'

import './BeerList.css'

function App({ beer }) {
    return (

        <li className='list-row'>

            <Link className='list-group-item list-group-item-action' to={`/beers/details/${beer._id}`}>

                <div className='image'>

                    <div className='d-flex justify-content-center'>

                        <img src={beer.image_url} alt={`${beer.name} beer`} />

                    </div>

                </div>

                <div className='info'>

                    <h2>{beer.name}</h2>

                    <h3>{beer.tagline}</h3>

                    <h4><b>Created by: </b>{beer.name}</h4>

                </div>

            </Link>

        </li>

    );
}

export default App;