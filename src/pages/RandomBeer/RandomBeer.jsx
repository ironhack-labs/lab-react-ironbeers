import SingleBeer from "../../components/SingleBeer/SingleBeer"
import { useEffect, useState } from "react"

import beersService from "../../services/beers.service"


function RandomBeerPage(){

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(()=>{
        beersService
            .getRandomBeer()
            .then(response => {
                setRandomBeer(response.data)
            })
    }, [])

    return(
        <SingleBeer beer={randomBeer}/>
    )
}

export default RandomBeerPage