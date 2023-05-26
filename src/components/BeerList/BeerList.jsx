
import { Link } from "react-router-dom"
import CardBeer from "../../components/CardBeer/CardBeer"


const BeerList = ({ beers }) => {

    return (
        beers.map((beer) => {
            return <Link to={`/beers/${beer._id}`} key={beer._id}><CardBeer beer={beer} /> </Link>
        })
    )
}

export default BeerList