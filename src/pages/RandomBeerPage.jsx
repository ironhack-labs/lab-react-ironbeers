import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [rendomBeer, setRandomBeer] = useState([])

    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => { setRandomBeer(response.data) })
            .catch(error => { console.error('There was an error!', error) })

    }, [])


    return (
        <>
            <div>
                {!rendomBeer ?
                    <>
                        <h1>cagando...</h1>
                    </>
                    :
                    <div className="container d-flex justify-content-between">
                        <img src={rendomBeer.image_url} alt="" />
                        <div className=" d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: '60vw' }} >
                            <h1>{rendomBeer.name}</h1>
                            <p>{rendomBeer.tagline}</p>
                            <div className=" d-flex flex-row">
                                <strong>{rendomBeer.first_brewed}</strong>
                                <p>{rendomBeer.attenuation_level}</p>
                            </div>
                            <p>{rendomBeer.description}</p>
                            <p>{rendomBeer.contributed_by}</p>

                        </div>

                    </div>
                }
            </div>
        </>
    )

}

export default RandomBeersPage;
