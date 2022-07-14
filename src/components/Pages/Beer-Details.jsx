import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import BeerCard from "../BeerCard/BeerCard"
import apiService from "../ApiService/ApiService"
import Navigation from "../Navigation/Navigation"

const BeerDetails = () => {
    const { id } = useParams();

    const [beer, setBeer] = useState([]);


    useEffect(() => {
        apiService
            .getOneBeer(id)
            .then(({ data }) => {
                setBeer(data);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <>
            <Navigation />
            <BeerCard {...beer} />

        </>
    )
}

export default BeerDetails