import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const beerAPI = "https://ih-beers-api2.herokuapp.com/beers/"

function BeerDetailsPage(props) {
    const [beerDetails, setBeerDetails] = useState([])
    const [fetching, setFetching] = useState(true);

    let { beerId } = useParams();
    let beerDetailsApi = beerAPI + beerId

    useEffect(() => {
        axios.get(beerDetailsApi)
            .then((response) => {
                setBeerDetails(response.data)
                setFetching(false)
            })
            .catch((error) => console.log(error))
    }, [beerId])

    const imgStyle = {
        maxHeight: '250px',
        width: 'auto',
    }


    return (
        <div className="container pt-5">
            {fetching ? <p>Loading ...</p> :
                <>
                    <div className="row justify-content-center">
                        <img src={beerDetails.image_url} alt="Beer Image" style={imgStyle} />
                    </div>
                    <div className="row pt-3">
                        <div className="col-9">
                            <h2>{beerDetails.name}</h2>
                        </div>
                        <div className="col-3 text-end">
                            <p className="text-secondary fs-4">{beerDetails.attenuation_level}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <p className="text-secondary fs-4">{beerDetails.tagline}</p>
                        </div>
                        <div className="col-3 text-end">
                            <p><strong>{beerDetails.first_brewed}</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <p>{beerDetails.description}</p>
                    </div>
                    <div className="row">
                        <p className="text-secondary fw-bold"> {beerDetails.contributed_by}</p>
                    </div>
                </>
            }
        </div>

    )
}

export default BeerDetailsPage;
