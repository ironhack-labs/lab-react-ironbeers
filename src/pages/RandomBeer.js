import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from '../components/NavBar'



const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function RandomBeer() {
    const [beer, setBeers] = useState({})

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get((apiEndpoint))
            setBeers(res.data[Math.floor(Math.random()*36)])
        }
        apiCall()
    }, [])


    return (
        <div>
            <NavBar/>
         
            {beer !== {} &&   <div>
            <img src={beer.image_url} alt="error"/>
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attentuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
            </div>
}
        </div>
    )
}



export default RandomBeer