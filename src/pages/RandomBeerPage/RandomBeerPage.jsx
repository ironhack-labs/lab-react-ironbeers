import { useEffect, useState } from "react";
import BeerCard from "../../components/BeerCard/BeerCard"




const RandomBeerPage = () => {

    const [randomBeer, setBeers] = useState({})
    useEffect(() => {
        fetch(' https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => res.json())
            .then(beerRandomed => setBeers(beerRandomed))

    }, [])


    return (
        <>
            <BeerCard {...randomBeer} />
        </>


    )
}

export default RandomBeerPage