import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getBeerDetail, getRandomBeer } from '../../services/BeerServices'
import './beerDetails.css'

const BeerDetails = () => {
    const { id } = useParams()
    const [beerDetail, setBeerDetail] = useState(null)

    console.log(id);
    useEffect(() => {
        if (id) {
            getBeerDetail(id)
                .then((beerFound) => {
                    setBeerDetail(beerFound)
                    console.log(beerFound)
                })
        } else {
            getRandomBeer()
                .then((randomBeer) => {
                    setBeerDetail(randomBeer)
                })
        }
    }, [id])

    return(
        <div className='beerDetail'>
        {beerDetail !== null ? 
            <div className='detailContainer'>
                <img src={beerDetail.image_url} alt={beerDetail.name} />
                <div className='textContainer'>
                    <h2>{beerDetail.name}</h2>
                    <h3>{beerDetail.tagline}</h3>
                    <p>{beerDetail.description}</p>
                    <small>{beerDetail.contributed_by} | {beerDetail.first_brewed} | {beerDetail.attenuation_level}</small>
                </div>
            </div>
            :
            <h2>Loading...</h2>
        }
        </div>
    )
}

export default BeerDetails 