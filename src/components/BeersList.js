import React from 'react'
import {Link} from 'react-router-dom'

function BeersList(props) {

    // props.todos = [{}, {}, {}]
    //console.log(props)

    return (
        <div>
           <h3 style={{color: 'red'}}>In AllBeers who calls BeerList </h3>
           <div style={{height: '500px', overflowY: 'scroll'}}>
            {
                props.beers.map((beer, i) => {
                        return (
                            <Link to={`/beer/${beer._id}`} key={{i}} style={{border: '2px solid black', display: 'flex', flexDirection: 'row'}}>
                                <img src={beer.image_url} style={{height: '150px'}} alt='beerY' />
                                <div>
                                    <p>{beer.name}</p>
                                    <p>{beer.tagline}</p>
                                    <p>{beer.contributed_by}</p>
                                    <p>{beer._id}</p>
                                    <p>{i}</p>
                                </div>
                            </Link>
                            )
                })
            }
           </div>
        </div>
    )
}

export default BeersList
