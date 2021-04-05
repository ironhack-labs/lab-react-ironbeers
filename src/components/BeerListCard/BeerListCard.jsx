import React from 'react';
import {Link} from 'react-router-dom'

import './BeerListCard.css'

const BeerListCard = ({beersData}) => {


    const getBeersList = () =>{
        let list = []
        beersData.map(beer => {
            list.push(
            <div className="container m-3 border-bottom " key={beer._id} >          
                <div className="row">
                    <div className="col-4">
                        <div className="img__list__style">
                        <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image_url} alt={beer.name} className="img-fluid m-1"/>
                        </Link>
                        </div>
                    </div>
                    <div className="col-8">
                        <Link to={`/beers/${beer._id}`}><h1>{beer.name}</h1></Link>
                        <h5>{beer.tagline}</h5>
                        <h5><b>Created by: </b>{beer.contributed_by}</h5>
                    </div>
                </div>
            </div>
            )
            return 1
        })
        return list
    }

    return (
        <div>
            {getBeersList()}
        </div>
    );
};

export default BeerListCard;