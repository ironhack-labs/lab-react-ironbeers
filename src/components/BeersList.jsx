import { useEffect, useState } from "react"
import beerServices from "../services/beer.service"
import BeerCard from "./BeerCard"
import { Container } from "react-bootstrap"


function BeersList(){
    const [beers, setBeers] = useState([])
    const getData = async()=>{
        try{
            const beersFromAPI = await beerServices.getAll()
            setBeers(beersFromAPI.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    }, [])

    return (
        <Container  className = "d-flex align-items-center flex-column" >
            {beers.map((beer) => <BeerCard 
                key={beer._id}
                image={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
                createdBy={beer.contributed_by}
                id={beer._id}
                
                />)}
        </Container>
    )
}

export default BeersList