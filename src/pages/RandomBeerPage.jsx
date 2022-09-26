import SingleBeer from "../components/SingleBeer";
import { useEffect, useState } from "react"
import beerAxios from "../services/beerAxios"
import NavBar from "../components/NavBar"

function RandomBeerPage() {
    const beers = new beerAxios();
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        beers.getRandomBeer()
            .then((beer) => {
                console.log(beer)
                setRandomBeer(beer)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <SingleBeer beer={randomBeer}></SingleBeer>
        </div>

    )
}

export default RandomBeerPage