import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header';
import beersService from '../services/beers.service'
import { useState, useEffect } from 'react'

const RandomBeer = ({ title, director, IMDBRating }) => {

    const [beerDetails, setBeerDetails] = useState({})
    const { beer_Id } = useParams()

    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => setBeerDetails(data))

            .catch(err => console.log(err))
    }

    return (
        <div className="RandomBeer">
            RandomBeer
            <Header />
            <div>
                <img src={beerDetails.image_url} alt="" />
                <p>{beerDetails.name}</p>
                <p>{beerDetails.tagline}</p>
                <p>{beerDetails.first_brewed}</p>
                <p>{beerDetails.attenuation_level}</p>
                <p>{beerDetails.description}</p>
                <p>{beerDetails.contributed_by}</p>
            </div>
        </div>
    );
}

export default RandomBeer;