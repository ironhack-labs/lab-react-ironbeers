import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar'



const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/"

function BeerSpecifications() {
    const { beersId } = useParams()
    const [beers, setBeers] = useState({})

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get((apiEndpoint + beersId))
            setBeers(res.data)
        }
        apiCall()
    }, [])


    return (
        <div>
            <NavBar/>
            <div>
            <img src={beers.image_url} alt="error"/>
            <p>{beers.name}</p>
            <p>{beers.tagline}</p>
            <p>{beers.first_brewed}</p>
            <p>{beers.attentuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>
            </div>
        </div>
    )
}




export default BeerSpecifications