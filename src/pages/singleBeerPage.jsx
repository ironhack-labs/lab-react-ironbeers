import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";

import beerHandler from "../services/beers.handler";
import BeersCard from "../components/beersCard/BeersCard"

const SingleBeerPage = () => {
    const {Id} = useParams()
    console.log('el ide es',Id)
    const [singleBeer,setSingleBeer]= useState({})

    useEffect(()=>{
        beerHandler
            .getOneBeer(Id)
            .then(({ data }) => setSingleBeer(data))
            .catch(err => console.log(err))
    },[Id])
    return (
        <BeersCard beerData={singleBeer}/>
    )
}

export default SingleBeerPage