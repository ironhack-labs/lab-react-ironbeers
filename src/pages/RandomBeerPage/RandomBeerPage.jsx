

import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import OneBeer from "../../components/BeerDetails/BeerDetails"
import beerService from "../../services/beers.services"


const RandomBeer = () => {

    const [myBeer, setMyBeer] = useState({})

    const loadBeer = () => {
        
        beerService
            .getRandomBeer()
            .then(({data}) => setMyBeer(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeer()
    }, [])
    
    return (

        <>
            {!myBeer ? <h1>Loading</h1> :
                <Container className="mt-5">
                    <OneBeer myBeer={myBeer} />
                </Container>                

            }
        </>
    )
    
}

export default RandomBeer