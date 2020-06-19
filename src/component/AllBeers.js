import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

export default function AllBeers(props) {
    return (<>
        {
            props.beers.map((beer, index) => {
                return (
                    <div key={index} className="card mb-3" style={{width: '540px'}}>
                        <div className="row no-gutters">
                            <img src={beer.image_url} className="card-img" alt="" />
                        </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{beer.name}</h5>
                                    <p className="card-text">{beer.tagline}</p>
                                    <p className="card-text"><small class="text-muted">{beer.contributed_by}</small></p>
                                    <Link to={`/beers/${beer._id}`}>Check the details</Link>
                                </div>
                            </div>
                    </div>
                )
            })
        }
    </>)
}
