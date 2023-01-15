import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const RandomBeer = () => {
    const { beerID } = useParams()
    const [beer, setBeer] = useState([])
    const [load, setLoad] = useState(false)

    const fetchData = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => setBeer(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
        setLoad(true)
    }, []);

    return (
        <div style={{ width: '300px', margin: 'auto' }} >

            {load &&
                <>
                <img src={beer.image_url} alt={beer.name} style={{ width: 70}} />
                    <p>{beer.name}</p>
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </>
            }



        </div>
    );
}

export default RandomBeer;