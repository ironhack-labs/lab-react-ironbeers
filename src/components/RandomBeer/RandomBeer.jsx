
import BeerCard from "../BeerCard/BeerCard"
import beerService from "../../services/beerServers"
import { useEffect, useState } from "react"

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState()

    useEffect(() => {
        RandomBeer()
    }, [])


    const RandomBeer = () => {
        beerService
            .getRandomBeer()
            .then(({ data }) => { setRandomBeer(data) })
            .catch(err => console.log(err))
    }
    return (


        !randomBeer
            ?
            "Cargnado"
            :
            <BeerCard Updatebeers={[randomBeer]} descp={true} />


    )
}

export default RandomBeer

