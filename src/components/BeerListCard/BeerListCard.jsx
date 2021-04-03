import React from 'react';
import './BeerListCard.css'

const BeerListCard = ({beersData}) => {

    const getBeersList = () =>{
        let list = []
        beersData.map(beer => {
            list.push(
            <div className="container m-3" key={beer._id} >
                <div className="row">
                    <div className="col-4">
                        <div className="img__list__style">
                            <img src={beer.image_url} alt={beer.name} className="img-fluid m-1"/>
                        </div>
                    </div>
                    <div className="col-8">
                        <h1>{beer.name}</h1>
                        <h5>{beer.tagline}</h5>
                        <h5><b>Created by: </b>{beer.contributed_by}</h5>
                    </div>
                </div>
            </div>
            )
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