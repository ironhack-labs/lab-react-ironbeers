import { useState, useEffect } from "react"
import { BeerDetails } from "./BeerDetails";
import { fetchWrapper } from "../function/fetchWrapper";

export const RandomBeer = () => {

    const [ randomBeer, setRandomBeer ] = useState(null);


    useEffect(() => {
        fetchWrapper(process.env.REACT_APP_API_BASE_URL + "/beers/random")
        .then((data) => setRandomBeer(data))
    }, [])

    return (
        <>

        {!randomBeer
        ? <p>loading...</p>
        : <BeerDetails beerData={randomBeer}/>
        }
        </>
    )
}