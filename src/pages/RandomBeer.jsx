import axios from "axios";
import { useEffect, useState } from "react";
import {Box, Center, Spinner} from "@chakra-ui/react";
import BeerDetailCard from "../components/BeerDetailCard"

export default function RandomBeer () {

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"
const [randomBeer, setRandomBeer] = useState([])

useEffect (() => {
    const getData = async() => {
    try {
    const res = await axios.get(`${API_URL}/random`)
    setRandomBeer(res.data)     
    } catch (error) {
    console.log(error)      
    }
    }
    getData();
}, [])


    return (
        <Box as="section">
        {
            randomBeer ? <BeerDetailCard {...randomBeer}/>:
            <Center>
                <Spinner />
            </Center>
        }
    </Box> 
    )
}