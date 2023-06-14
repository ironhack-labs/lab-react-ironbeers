import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Box, Stack, Flex, Heading, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AllBeers() {

    const API_URL = "https://ih-beers-api2.herokuapp.com/beers"
    const [beers, setBeers] = useState([])

    const getData = async () => {
        try {
            const res = await axios.get(API_URL)
            console.log(res.data)
            setBeers(res.data)
            console.log("hola")
        } catch (error) {
            console.error(error)
        }
    }

    useEffect (() => {
        getData()
    }, [])

    const displayAllBeers = () => {
        return beers.map((beer) => (
            <Flex 
            className="BeerCard" 
            key={beer._id}
            >

                <Box>
                <img src={beer.image_url} alt="Beer" />
                </Box>

                <Stack>
                <Heading as="h1">{beer.name}</Heading>
                <Heading as="h4">{beer.tagline}</Heading>
                <Text>Created by: {beer.contributed_by}</Text>
                <Link>See details</Link>
                </Stack>



            </Flex>
         ) )

    }








    return (
        <>
            {beers.length ? displayAllBeers() : <Spinner />}
            
        </>
    )
}
