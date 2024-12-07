import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const [beer, setBeer] = useState();
    const { beerId } = useParams();
    const getBeer = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => setBeer(response.data))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        getBeer()
    }, [beerId]);
    return (
        <>
            {beer && (
                <>
                    <img className="col-12" src={beer.image_url} alt={beer.name} />
                    <div className="d-flex flex-column container">
                        <div className="d-flex flex-row mb-1 align-items-baseline">
                            <h2 style={{ fontSize: "6rem", marginRight: "auto", fontWeight: "400" }}>{beer.name}</h2>
                            <p style={{ fontSize: "5rem", color: "gray" }}>{beer.attenuation_level}</p>
                        </div>
                        <div className="d-flex flex-row mb-3 align-items-baseline">
                            <h3 style={{ fontSize: "3rem", color: "gray", marginRight: "auto" }}>{beer.tagline}</h3>
                            <p style={{ fontSize: "2rem", fontWeight: "800" }}>{beer.first_brewed}</p>
                        </div>
                        <p style={{ fontSize: "3rem", fontWeight: "400", lineHeight:"100%", marginBottom: "3rem" }}>{beer.description}</p>
                        <p style={{ fontSize: "2rem", color: "gray",  fontWeight: "800"}}>{beer.contributed_by}</p>
                    </div>
                </>
            )}
        </>
    );
}

export default BeerDetailsPage;
