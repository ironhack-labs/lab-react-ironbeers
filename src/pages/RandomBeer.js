import { useEffect, useState } from "react";
import Header from "../components/Header.js";
import axios from 'axios'

const RandomBeer = () => {

    const [random, setRandom] = useState([])

    useEffect(() => {

        async function fetchRandomBeer() {
            try {
                const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
                setRandom(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRandomBeer()
    }, [])

    return (
            <>
                            <Header />
                            <img src={random.image_url} width="50px" />
                                    <h3>{random.name}</h3> 
                                    <h4>{random.tagline}</h4> 
                                    <p>{random.first_brewed}</p>
                                    <p>{random.attenuation_level}</p>
                                    <p>{random.description}</p>
                                    <p>Created by: {random.contributed_by}</p> 
            </>
   
    )
}

export default RandomBeer;