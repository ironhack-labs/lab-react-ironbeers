import React from "react";
import BeerCard from "../../components/BeerCard/BeerCard";
import { Link } from "react-router-dom";






const BeerList = ({ beers }) => {


    return (
        <div className="App text-start">
            {!beers ?
                (
                    <h1 className='mx-3'>Loading...</h1>
                ) :
                (beers.map(beer => {

                    return (
                        <div className="BeerList" key={beer._id}>
                            <Link
                                className="text-dark"
                                style={{textDecoration: 'none' }}
                                to={`/beers/${beer._id}`}>
                                <BeerCard {...beer} />
                            </Link>
                        </div>
                    )
                }))
            }

        </div>
    );
}


export default BeerList;



