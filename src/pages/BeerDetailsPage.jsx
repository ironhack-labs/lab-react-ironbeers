import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
    const [beer, setBeer] = useState("")
    const { beerId } = useParams()

    useEffect((beer) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(res => {
                setBeer(res.data)
            })
    }, []);
    if (beer === "") {
        return (
            <div>Loading......</div>
        )

    } else {

        return (
            <div className="card align-items-center">
                <div className="row align-items-center justify-content-center g-0">
                    <div className="col-md-1">
                        <img src={beer.image_url} alt="" className=" img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8 ms-3">
                        <div className="card-body row">
                            <div className="col-md-6">
                                <h2>{beer.name}</h2>
                            </div>
                            <div className="col-md-2" style={{ color: "grey" }}>
                                <h2>{beer.attenuation_level}</h2>
                            </div>
                            <div className="col-md-6">
                                <h6>{beer.tagline}</h6>
                            </div>
                            <div className="col-md-2" style={{ color: "grey" }}>
                                <h5>{beer.first_brewed}</h5>
                            </div>
                        </div>
                        <p className="col-md-4">{beer.description}</p>
                        <h5>{beer.contributed_by}</h5>
                    </div>
                </div>
            </div>
        )

    }


   

}

export default BeerDetailsPage;
