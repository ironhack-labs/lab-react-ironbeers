import React from 'react'
import './BeerDetails.css'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'



function BeerDetails(props) {

    const { beerId } = useParams();

    const beer = props.beers.find(beer => beer._id === beerId)
    
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(beer) {
            setTimeout(() => setLoading(false), 2000)
        }
    }, [beer])
  


    return(
        <>
        <div>
        {loading ? (<p><Loading/></p>) : (
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

                            <Link to="/beers"><h4>All Beers</h4></Link>
                        </div>
                </div>
                
        )}
        </div>
        </>
    )
}

export default BeerDetails