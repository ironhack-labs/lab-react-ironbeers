import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "../components/Header"
import beersService from "../services/beersService";

function BeerDetails() {
    const [details, setDetails] = useState({});

    const { beerId } = useParams();

    useEffect(() => {
        loadBeer()
    })

    const loadBeer = () => {
        beersService
            .getOneBeer(beerId)
            .then(({ data }) => {
                setDetails(data)
            })
            .catch(e => console.log("error getting data from API", e))
    }

    return (
        <>
            <Header />
            <div>
                <img src={details.image_url} alt="" style={{ maxHeight: "20vh" }} />
                <p>{details.name} </p>
                <p>{details.attenuation_level} </p>
                <p>{details.tagline}</p>
                <p>{details.first_brewed}</p>
                <p>{details.description}</p>
                <p>{details.contributed_by}</p>
            </div>

        </>
    )
}

export default BeerDetails