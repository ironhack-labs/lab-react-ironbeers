import { useParams } from "react-router-dom"
import axios from "axios"
import {useEffect, useState} from "react"
import SpecificBeer from "./SpecificBeer"

const BeerDetails = () => {
    const [beer, setBeer] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then(results => {
            
            setBeer(results.data)
        })
    }, [id])

    return beer ? (
       <SpecificBeer beer={beer}/>
    ) :
    (
        <div>
            <p>loading the beer... </p>
        </div>
    )
}

export default BeerDetails