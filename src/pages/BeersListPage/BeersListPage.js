import axios from "axios"
import { useState, useEffect } from "react"
import AllBeersList from "../../components/AllBeersList/AllBeersList"
import beersService from "../../services/beers.services"
import { Spinner } from "react-bootstrap"

export default function BeersListPage(){

    const[beers, setBeers] = useState([])

    useEffect(()=>{
        loadBeers()   
    },[])

    function loadBeers(){
        beersService
        .getAllBeers()
        .then(({data}) => setBeers(data))
        .catch(err=>console.log(err))
    }
    if(beers) {
        return (
            <AllBeersList beers={beers}/>
        )
    }
    if(!beers){
        return (
            <Spinner/>
        )
    }
}