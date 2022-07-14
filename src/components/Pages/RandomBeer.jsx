import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import BeerCard from "../BeerCard/BeerCard"
import apiService from "../ApiService/ApiService"
import Navigation from "../Navigation/Navigation"

const RandomBeer = () => {
    const { id } = useParams();

    const [randomBeer, setRandomBeer] = useState([]);


    useEffect(() => {
        apiService
            .getRandomBeer()
            .then(({ data }) => {
                setRandomBeer(data);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <>
            <Navigation />
            <BeerCard {...randomBeer} />

        </>
    )
}

export default RandomBeer 