import './BeerList.css'
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom'



const BeersList = (props) => {

    const { beers } = props
   
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(beers) {
            setLoading(false)
        }
    }, [beers])
  

    return (
        <>
        <div>
            {loading ? (<p><Loading/></p>) : (
                beers && beers.map(beer => (
                    <div className="wrapper">
                    <div key={beer._id}>
                        <div className='product-img'>
                        <img src={beer.image_url} width="150" height="350" alt="beer" className="BeerImg"/>
                        </div>
                        <div className="product-info">
                            <h1>{beer.name}</h1>
                            <div className='product-text'>
                            <h3>{beer.tagline}</h3>
                            <div className='text-description'>
                            <h6>{beer.description}</h6>
                            </div>
                            <>
                            <Link to={ `/beers/${beer._id}`}>{beer.name}</Link>
                            </>
                            </div>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </div>
                    </div>
                </div>
                ))
            )}
        </div>
        </>
    )
}



export default BeersList;


