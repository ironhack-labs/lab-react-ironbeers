import React from 'react'
import { Link } from "react-router-dom";

function AllBeers({ beers }) {
    // console.log("from beers comp", beers)
    return (
        <div>
        <h1>Beer List</h1>
        <div className="">
        {beers.map(beer => {
            return (
                <Link key={beer._id} to={`/beers/${beer._id}`} className="card beer-list-card">
                    <div className="img-container col-sm-4"><img src={beer.image_url} alt={beer.name} /></div>
                    <div className="col-sm-8">
                        <h1>{beer.name}</h1>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </div>
                </Link>
            )
        })}
        </div>
        </div>
    )
}

export default AllBeers;