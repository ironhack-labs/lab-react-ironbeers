import { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard/BeerCard";
import ironbeersService from "../services/Ironbeersservice"

import { useParams } from 'react-router-dom'


function BeerDetails() {

    const { _id } = useParams()

    const [beer, setBeer] = useState([])

    useEffect(() => {
        ironbeersService
            .getOneBeer(_id)
            .then((beer) => {
                setBeer(beer);
            })
    }, [])

    return (
        <BeerCard beer={beer} />
    )

}

export default BeerDetails