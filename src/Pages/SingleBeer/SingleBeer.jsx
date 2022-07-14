import { Link, useParams } from "react-router-dom"
import BeerDetailCard from './../../Components/BeerDetailCard/BeerDetailCard'
import { Button } from "react-bootstrap"
import Header from "../../Components/Header/Header"


const BeerDetails = ({ beersList }) => {

    const { beer_id } = useParams()

    const foundBeer = beersList.find(elm => elm._id === beer_id)


    return (<>
        <Header />
        <BeerDetailCard beer={foundBeer} />
        <Link to={`/beers`}>
            <div className="mb-5 ">
                <Button variant="dark" size="sm" as="div">Back to list</Button>
            </div>
        </Link>
    </>
    )
}

export default BeerDetails