import axios from "axios"
import { useEffect, useState } from "react"
import BeerCard from "../../components/BeerCard/BeerCard"
import Nav from "../../components/Navbar/Navbar"


const RandomBeerPage = () => {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(()=> {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => setRandomBeer(response.data))
    }, [])

    return (
       <>
       <Nav />
      <BeerCard beer={randomBeer} />
       
       </>
    )
}
export default RandomBeerPage