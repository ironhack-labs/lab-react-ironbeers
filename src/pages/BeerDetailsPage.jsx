import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BeerDetailsPage() {

    const [beer, setBeers] = useState(null)
    const {beerId} = useParams()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((oneBeer)=>{
            setBeers(oneBeer.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [beerId])


    return (
        <div>
            {!beer && <p>Loading...</p>}
            {beer &&
            <div className="individual-beer-container">
                <img src={beer.image_url} alt="" />
                <div className="each-beer">
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2> <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            </div>
            }
        </div>
    )

}

export default BeerDetailsPage;
