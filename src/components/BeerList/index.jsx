import BeerListItem from "../BeerListItem"
import { Link } from "react-router-dom"
const BeerList = ({ beers }) => {
    return (
        <>
            <br />
            {beers.map(beer => {
                return (
                    <div key={beer._id}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/details/${beer._id}`}>
                            <BeerListItem  {...beer} />
                            <hr />
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default BeerList