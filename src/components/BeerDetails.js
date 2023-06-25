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
            })
            .catch(e => console.log(e))} ,[])
    return (
        <>      
                <div className="beerContainer" key={beer._id}>
                
                <img src={beer.image_url} alt="beerImg" />
               
                <h3>Beer Name: {beer.name}</h3>
                <h3> {beer.tagline}</h3>
                <h3> {beer.first_brewed}</h3>
                <h4> {beer.attenuation_level}</h4>
                <p> {beer.description}</p>
                <h3>Created by: {beer.contributed_by}</h3>

                <Link to="/beers">Back</Link>

                </div>
        </>
    )
};

export default BeerDetails;