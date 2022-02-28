import axios from "axios"
import {useEffect, useState} from "react"
import SpecificBeer from "./SpecificBeer"

const RandomBeer = () => {
    const [beer, setBeer] = useState(null)
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(results => {
            setBeer(results.data)
        })
    }, [])    

    return beer ? (
        <SpecificBeer beer={beer}/>
    ) : 
    (
        <div>
            <p>loading the random beer...</p>
        </div>
    )
}

export default RandomBeer