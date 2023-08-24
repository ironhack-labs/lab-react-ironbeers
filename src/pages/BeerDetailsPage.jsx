import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const { beerId } = useParams()
    const [beer, setBeer] = useState([])

    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => { setBeer(response.data) })
            .catch(error => { console.error('There was an error!', error) })

    }, [beerId])


    return (
        <>
            <div>
                {!beer ?
                    <>

                        <h1>cagando...</h1>
                    </>
                    :

                    <div className="container d-flex justify-content-between">
                        <img src={beer.image_url} alt="" />
                        <div className=" d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: '60vw' }} >
                            <h1>{beer.name}</h1>
                            <p>{beer.tagline}</p>
                            <div className=" d-flex flex-row">
                                <strong>{beer.first_brewed}</strong>
                                <p>{beer.attenuation_level}</p>
                            </div>
                            <p>{beer.description}</p>
                            <p>{beer.contributed_by}</p>

                        </div>

                    </div>
                }
            </div>
        </>
    )
}

export default BeerDetailsPage;
