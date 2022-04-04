import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBeerList, filterBeer } from '../../services/BeersServices'
import './BeerList.scss'

const BeerList = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        getBeerList()
            .then((beers) => {
                setBeers(beers)
            })
    }, [])

    const handleChange = (e) => {
        const { value } = e.target
        filterBeer(value)
            .then((beerFiltered) => {
                setBeers(beerFiltered)
            })
    }

    return(
        
        <div className='BeerList'>
            <div className='filter-container m-5'>
                <label className='label-form' htmlFor="filter"><i className="fa-solid fa-magnifying-glass mx-3"></i></label>
                <input className='form-control' type="text" onChange={handleChange} placeholder="Filter a beer"/>
            </div>
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


