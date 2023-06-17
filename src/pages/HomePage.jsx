import { Card, CardHeader, CardBody, CardFooter, Image, Text, Stack, Heading } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import image1 from "../assets/beers.png"
import image2 from "../assets/new-beer.png"
import image3 from "../assets/random-beer.png"
function HomePage () {
    return(
        <>
        <Link to="/beers">
        <Card maxW='lg'>
            <CardBody>
                <Image src={image1} alt="All Beers" />
                <Stack>
                <Heading> All Beers</Heading>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eius saepe harum totam necessitatibus voluptas error quae sint atque, repellendus tenetur commodi ut, corporis libero eos pariatur eligendi! Ab, consectetur.</Text>
                </Stack>
            </CardBody>
        </Card>
        </Link>
        <Link to="/new-beer">
        <Card maxW='lg'>
            <CardBody>
                <Image src={image2} alt="New Beer" />
                <Stack>
                <Heading> New Beer</Heading>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eius saepe harum totam necessitatibus voluptas error quae sint atque, repellendus tenetur commodi ut, corporis libero eos pariatur eligendi! Ab, consectetur.</Text>
                </Stack>
            </CardBody>
        </Card>
        </Link>
        <Link to="/random-beer">
        <Card maxW='lg'>
            <CardBody>
                <Image src={image3} alt="Random Beer" />
                <Stack>
                <Heading> Random Beer</Heading>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eius saepe harum totam necessitatibus voluptas error quae sint atque, repellendus tenetur commodi ut, corporis libero eos pariatur eligendi! Ab, consectetur.</Text>
                </Stack>
            </CardBody>
        </Card>
        </Link>
        </>
    )
}

export default HomePage;