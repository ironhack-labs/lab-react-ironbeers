import React from 'react';
import './BeersList.css'
import NavBar from '../NavBar/NavBar'
import {Link} from "react-router-dom"

const BeersList = ({data, loading}) => {

        return (
            <div className='BeersList'>
                <NavBar /> 
                {loading ? (<h1>...loading</h1>) : 
                <div className='list__wrapper container'>
                    
                        {data.map((beer) => (
                            <Link to={`/beers/${beer._id}`}  className='card__wrapper' key={beer._id}>
                            <div className="row px-5 py-5 d-flex flex-wrap  align-items-center beer__wrapper" >
                                <div >
                                    <img src={beer.image_url} alt='beer' height='200'/>
                                </div>
                                <div className=" mx-5 d-flex flex-column align-items-start justify-content-center" >
                                    <h3>{beer.name}</h3>
                                    <h5>{beer.tagline}</h5>
                                    <p><b>Created by:</b>{beer.contributed_by}</p>
                                </div>
                            </div>
                            </Link>
                        ))}
                    
                </div>
                
                }
                
            </div>
        )
    
    
}

export default BeersList;