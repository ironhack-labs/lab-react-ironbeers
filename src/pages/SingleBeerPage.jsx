import SingleBeer from "../components/SingleBeer";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import beerAxios from "../services/beerAxios"
import NavBar from "../components/NavBar"


function SingleBeerPage() {
    const beers = new beerAxios();
    const [oneBeer, setOneBeer] = useState({});
    const { id } = useParams();

    console.log(id)

    useEffect(() => {
        beers.getOneBeer(id)
            .then((newBeer) => {
                setOneBeer(newBeer)
            })
            .catch((err) => console.log(err))
    }, [])

    console.log(oneBeer)

    return (
        <div>
            <NavBar></NavBar>
            <SingleBeer beer={oneBeer} />
        </div>

    )
}

export default SingleBeerPage