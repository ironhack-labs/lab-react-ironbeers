import React from 'react'
import './BeerDetails.css'
import { useParams } from 'react-router-dom'





function BeerDetails(props) {

    const { beerId } = useParams();

    const beer = props.beer.find(beer => beer._id === beerId)

    console.log(beer)

    return(
        <>
        <div>
                    <div className="wrapper">
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
                            </div>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </div>
                </div>
                
           
        </div>
        </>
    )
}

export default BeerDetails