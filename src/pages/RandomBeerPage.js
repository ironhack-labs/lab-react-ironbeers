import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";


const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';



function RandomBeerPage() {

    //setting the random state
    const [randomBeer, setRandomBeer] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${apiURL}/random`); //getting a random beer from the API
            const oneRandomBeer = response.data;

            console.log("oneRandomBeer", oneRandomBeer.name);

            setRandomBeer(oneRandomBeer);
            
        }

        fetchData()
    }, [])

    return (  
        <div>
        <Header />

        <h2>Random Beer</h2>
        
        <img src={randomBeer.image_url} alt="" height="200px"/>
        <p>{randomBeer.name}</p>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
       
       
        </div>

    );
}

export default RandomBeerPage;