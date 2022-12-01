

import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import OneBeer from "../../components/BeerDetails/BeerDetails"
import beerService from "../../services/beers.services"


const BeerDetails = () => {

    const [myBeer, setMyBeer] = useState({})

    const { id } = useParams()

    console.log(myBeer)

    const loadBeer = () => {
        
        beerService
            .getBeerById(id)
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

export default BeerDetails