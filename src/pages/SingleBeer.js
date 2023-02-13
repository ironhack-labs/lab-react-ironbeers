import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBeer } from "../api";
import BeerDetails from "../components/BeerDetails";
import NavHome from "../components/NavHome";

function SingleBeer() {
    const { beerId } = useParams()
    const [beer, setBeer] = useState()
    useEffect(() => {
        async function getSingleBeerDetails(id) {
            const response = await getSingleBeer(id)
            setBeer(response.data)
        }

        getSingleBeerDetails(beerId)

    }, [beerId])

    return (
        <>
            <NavHome />
            {beer ? (
                <div>
                    <BeerDetails beer={beer} />
                </div>
            ) : (
                <p>loading...</p>
            )
            }
        </>
    )
}

export default SingleBeer;