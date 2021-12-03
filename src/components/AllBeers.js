import React from 'react'
import { Link } from 'react-router-dom'

//import BeerElement from './BeerElement'
import Navbar from './Navbar'




export default function AllBeers(props) {

    console.log(props)
    //  <BeerElement key={elm._id} {...elm} />
    return (
        <div>
            <Navbar />
            <div className="row">
                {
                    props.beers.map(beer => (
                        <div className="card mb-3" key={beer._id}>
                            
                            <Link to={`/${beer._id}`}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={beer.image_url} className="card-img" alt={beer.name} />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-title">{beer.name}</p>
                                            <p className="card-text"><span className="text-muted">{beer.tagline}</span></p>
                                            <p className="card-text"><strong>Created by:  {beer.name}</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}
