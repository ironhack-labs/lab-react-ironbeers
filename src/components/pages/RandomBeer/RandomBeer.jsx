

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";


const RandomBeer = () => {

    const [randomBeer, updateRandomBeer] = useState()// tipo de dato que quiero recibir

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                updateRandomBeer(response.data);
                console.log("holi caracoli", response.data)
            })
            .catch(err => console.log(err))

    }, [])


    return (

        <div className="RandomBeer">
            <p>{randomBeer?.name}</p>

            <div>
                <p> Name:{randomBeer?.name}</p>
                <img src={randomBeer?.image_url}></img>

                <p>Tagline:{randomBeer?.tagline}</p>
                <p> First brewed:{randomBeer?.first_brewed}</p>
                <p> Fattenuation level: {randomBeer?.fattenuation_level}</p>
                <p> Description: {randomBeer?.description}</p>
                <p> Contributed by{randomBeer?.contributed_by}</p>
            </div>

        </div>


    )
}




export default RandomBeer