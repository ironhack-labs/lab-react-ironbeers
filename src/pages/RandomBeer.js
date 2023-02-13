import { useEffect, useState } from "react";
import { getRandomBeer } from "../api";
import BeerDetails from "../components/BeerDetails";
import NavHome from "../components/NavHome";

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState('')

    useEffect(() => {
        async function handleRandomBeer() {
            const response = await getRandomBeer()
            setRandomBeer(response.data)
        }

        handleRandomBeer()
    }, [])


    return (
        <>
            <NavHome />
            {randomBeer ? (
                <div>
                    <BeerDetails beer={randomBeer} />
                </div>
            ) : (
                <p>Loading ...</p>
            )
            }
        </>
    )
}

export default RandomBeer;