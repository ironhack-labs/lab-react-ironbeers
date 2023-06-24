import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

 function BeerDetails(){

    const { beerId } = useParams()

    const [beer, setBeer] = useState({})

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/${beerId}`)
            .then((response) => {
                console.log(response.data)
                setBeer(response.data)
            })}, [])
            .catch(e => console.log(e))
    return (
        <>
                <div className="beerContainer" key={beer._id}>

                <img src={beer.image_url} alt="beerImg" />
               
                <h3>Beer Name: {beer.name}</h3>
                <h3>Tagline: {beer.tagline}</h3>
                <h3>Contributor: {beer.contributed_by}</h3>

                <Link to={`/beers/${beer._id}`}></Link>

                </div>
        </>
    )
};

export default BeerDetails;