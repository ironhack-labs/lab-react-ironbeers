import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Center, Spinner} from "@chakra-ui/react";
import BeerDetailCard from "../components/BeerDetailCard"



export default function BeerDetails () {
const API_URL = "https://ih-beers-api2.herokuapp.com/beers"
const [beer, setBeer] = useState([])
const { beerId } = useParams()

useEffect (() => {
    const getData = async() => {
    try {
    const res = await axios.get(`${API_URL}/${beerId}`)
    setBeer(res.data)     
    } catch (error) {
    console.log(error)      
    }
    }
    getData();
}, [beerId])

    return (
        <Box as="section">
            {
                beer ? <BeerDetailCard {...beer}/>:
                <Center>
                    <Spinner />
                </Center>
            }
        </Box>  
    );

}