import BeerDetail from "../../components/BeerDetail/BeerDetail"
import beersService from "../../services/beers.services"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function BeersDetailsPage(){

    const { _id } = useParams()
    
    const[beer, setBeer] = useState([])

    useEffect(()=>{
        loadBeer()   
    },[])

    function loadBeer(){
        beersService
        .getOneBeer(_id)
        .then(({data}) => setBeer(data))
        .catch(err=>console.log(err))
    }

    return (
        <BeerDetail beer={beer}/>
    )
}