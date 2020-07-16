import React  from 'react'
import { Link } from 'react-router-dom'

const BeerList = (props) => {

    const beersFromApi = props.beers

    return (
            <div className='container'>
                <h1>All beers</h1>
                
                {beersFromApi.map(beer => (
                    <div key={beer._id} >
                        <Link to={`/beer/${beer._id}`}>
                            <img src={beer.image_url} />
                            <div className='text-card'>
                            <h3>{beer.name}</h3>
                            <h6>{beer.tagline}</h6>
                            <p>{beer.contributed_by}</p>
                         </div>

                        </Link>

                    </div>
                ))}
            </div>
    )

}


export default BeerList