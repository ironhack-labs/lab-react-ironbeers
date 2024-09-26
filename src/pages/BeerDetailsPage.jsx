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
        <div className="container d-flex">
            {!beer && <p>Loading...</p>}
            {beer &&
            <div className="row">
                <img src={beer.image_url} alt="" style={{height:"300px", width: "auto"}}/>
                <div className="mt-4 mb-4 row">
                    <div className="col">
                        <h1>{beer.name}</h1>
                    </div>
                    <div className="col fs-3 text-muted"> 
                        <p>{beer.attenuation_level}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="lead text-muted fs-4">{beer.tagline}</h2>
                    </div>
                    <div className="col fw-bold">
                        <p>{beer.first_brewed}</p>
                    </div>
                </div>
                <div>
                    <p>{beer.description}</p>
                    <p className="text-muted fw-bold">{beer.contributed_by}</p>
                </div>
            </div>
            }
        </div>
    )

}

export default BeerDetailsPage;
