import axios from "axios";
import Header from "../components/Header";
import SingleBeer from "../components/SingleBeer";
import { useEffect, useState } from "react";

export default function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/beers/random`)
        .then((response)=>{
            setRandomBeer(response.data)
        })
        .catch((e)=>{console.log(e)})
    }, []);

    return(
        <>
        <Header />
        { randomBeer && <SingleBeer {...randomBeer} /> }
        { !randomBeer && <p>loading...</p> }
        </>
    )
}