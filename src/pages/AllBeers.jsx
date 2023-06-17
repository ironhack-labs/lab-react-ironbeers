import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Box, Stack, Flex, Heading, Card, CardHeader, CardBody, CardFooter, Image, Text, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AllBeers() {

    const API_URL = "https://ih-beers-api2.herokuapp.com/beers"
    const [beers, setBeers] = useState([])

    const getData = async () => {
        try {
            const res = await axios.get(API_URL)
            setBeers(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect (() => {
        getData()
    }, [])

    const displayAllBeers = () => {
        return beers.map((beer) => (
            <Box >
            <Card 
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            p={30}
            key={beer._id}
            >
                <Box
                w='200px'
                h='200px'
                >

                <Image
                    objectFit='cover'
                    maxW={{ sm: '200px' }}
                    maxH={{ sm: '200px' }}
                    ml={50}
                    src={beer.image_url}
                    alt='Beer'
                    />
                </Box>

                <Stack>
                    <CardBody>
                        <Heading size='lg'>{beer.name}</Heading>
                        <Heading size='md'>{beer.tagline}</Heading>
                        <Text>Created by: {beer.contributed_by}</Text>
                    </CardBody>

                    <CardFooter>
                    <Link to={`/beers/${beer._id}`}>
                        <Button variant='solid' colorScheme='blue'>
                            See details
                        </Button>
                    </Link>
                    </CardFooter>
                </Stack>



            </Card>
            </Box>
         ) )

    }








    return (
        <>
            {beers.length ? displayAllBeers() : <Spinner />}
            
        </>
    )
}
