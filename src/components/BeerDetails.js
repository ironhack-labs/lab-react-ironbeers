import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


function BeerDetails(props){

    const { id } = useParams();
    const [beerDetails, setBeerDetails] = useState(0)

    // console.log(props);

    useEffect(()=>{
        const fetchBeerDetails = () => {
            axios
            .get(`${process.env.REACT_APP_API_URL}/${id}`)
            .then((response) => {
                // console.log(response);
                setBeerDetails(response.data)
            })
            .catch(e => e)
        }
        fetchBeerDetails()
    }, [])
    // console.log(beerDetails);

    return(
        <div key={beerDetails._id}>
            <img src={beerDetails.image_url}/>
            <h1>{beerDetails.name}</h1>
            <h3>{beerDetails.tagline}</h3>
            <p>{beerDetails.first_brewed}</p>
            <p>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p>{beerDetails.contributed_by}</p>

        </div>
    )
}

export default BeerDetails