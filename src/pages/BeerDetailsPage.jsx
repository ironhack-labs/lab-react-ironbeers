import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './BeerDetailsPage.css'
function BeerDetailsPage() {
    const { beerId } = useParams()




    const [beers, setBeers] = useState({})

    console.log(beerId)

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))

    }, [])
    return (

        <div className="details">

            <img src={beers.image_url} alt="" />
            <div className="info">
                <h1>{beers.name}</h1>
                <p>{beers.tagline}</p>
                <p>{beers.contributed_by}</p>
            </div>



        </div>

    )

}

export default BeerDetailsPage;
