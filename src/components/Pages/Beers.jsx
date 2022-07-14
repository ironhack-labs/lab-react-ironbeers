import { useState, useEffect } from "react";
import apiService from "../ApiService/ApiService";
import Navigation from "../Navigation/Navigation";
import BeersList from "../BeersList/BeersList";


const Beers = () => {
    const [beersData, setBeersData] = useState([])


    useEffect(() => {
        apiService
            .getAllBeers()
            .then(({ data }) => {
                setBeersData(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (

        <>
            <Navigation />
            <BeersList beersData={beersData} />
        </>

    )
}

export default Beers