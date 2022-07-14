import BeerDetailCard from "../../Components/BeerDetailCard/BeerDetailCard"
import Header from "../../Components/Header/Header"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const RandomBeer = ({ beersList }) => {
    const randomNum = Math.floor(Math.random() * (beersList.length + 1))
    console.log(randomNum)

    return (<>
        <Header />

        <BeerDetailCard beer={beersList[randomNum]} />
        <Link to={`/beers`}>
            <div className="mb-5 ">
                <Button variant="dark" size="sm" as="div">Back to list</Button>
            </div>
        </Link>
    </>
    )
}

export default RandomBeer