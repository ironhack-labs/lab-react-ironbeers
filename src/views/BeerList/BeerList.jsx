import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBeerList } from '../../services/BeersServices'
import './BeerList.scss'

const BeerList = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        getBeerList()
            .then((beers) => {
                setBeers(beers)
            })
    }, [])

    return(
        
        <div className='BeerList'>
            <h2>All Beers</h2>
            <div className='beer-container'>
            {beers.length > 0 ? 
                beers.map(beer => {
                    return (
                        <Link to= {`/beers/${beer._id}`} className='beer-card' key={beer._id}>
                            <img src={beer.image_url} alt="" />
                            <div className='beer-card-text'>
                                <h2>{beer.name}</h2>
                                <p>{beer.tagline}</p>
                                <small>{beer.contributed_by}</small>
                            </div>
                        </Link>
                    )
                })
                :
                <h2>Loading...</h2>
            }

            </div>
        </div>
    )

}
export default BeerList


