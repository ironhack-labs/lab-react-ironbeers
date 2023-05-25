import BeerDetail from "../../components/BeerDetail/BeerDetail"
import beersService from "../../services/beers.services"
import { useState, useEffect } from "react"
import { Spinner, Container } from "react-bootstrap"

export default function RandomBeerPage(){

    
    const[beer, setBeer] = useState([])

    useEffect(()=>{
        loadBeer()   
    },[])

    function loadBeer(){
        beersService
        .getRandomBeer()
        .then(({data}) => setBeer(data))
        .catch(err=>console.log(err))
    }

    return (
        <Container>
            {
                !beer ?
                <Spinner></Spinner>:
                <BeerDetail beer={beer}/>
            }

        </Container>
    )
}