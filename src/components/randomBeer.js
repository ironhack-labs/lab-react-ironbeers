import axios from 'axios'
import { useState, useEffect } from 'react'

const baseUrl = 'https://ih-beers-api2.herokuapp.com'
const api = axios.create({ baseURL: baseUrl})

const RandomBeer = () => {
    const [randomBeer, setRandom] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
                setRandom(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return(
        <div>
            <img src={randomBeer.image_url} alt="beer" />
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.description}</p>
        </div>
    )
}
export default RandomBeer