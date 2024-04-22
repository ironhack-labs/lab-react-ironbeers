import axios from "axios"; 
import { useEffect, useState } from "react";

function RandomBeersPage() {
    const [random, setRandom] = useState(0)

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                setRandom(response.data)
            })
            .catch(() => console.log('error'))
    }, [])

    return (
        <>
        <h3>Random</h3>
        <div>
            <img src={random.image_url}></img>
            <p>Name: {random.name}</p>
            <p>Tagline: {random.tagline}</p>
            <p>First brewed: {random.first_brewed}</p>
            <p>Attenuation level: {random.attenuation_level}</p>
            <p>Description: {random.description}</p>
            <p>Contributed by: {random.contributed_by}</p>
        </div>
        </>
    )
}

export default RandomBeersPage;
