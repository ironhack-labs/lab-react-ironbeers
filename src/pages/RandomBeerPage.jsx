import { useEffect, useState } from "react"
import BeerDetails from "../components/BeerDetails"
import beerServices from "../services/beer.service"

function RandomBeerPage(){
    const [beer, setBeer] = useState({})
    useEffect(()=>{
        getRandomBeer()
    }, [])



    const getRandomBeer = async()=>{
        try {
            const randomBeer = await beerServices.getRandom()
            setBeer(randomBeer.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <BeerDetails beer={beer}/>
        </>
    )
}

export default RandomBeerPage