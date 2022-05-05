

import NavBar from "../Navbar/Navbar"
import ListCard from "../ListCard/ListCard"
import { Link } from "react-router-dom"


const ListBeer = ({ allBeers }) => {


    return (
        <>
            <NavBar />
            {allBeers.map(eachBeer => <Link key={eachBeer._id} className="text" to={`/beers/${eachBeer._id}`}><ListCard {...eachBeer} /> <hr /></Link>)}

        </>

    )

}
export default ListBeer