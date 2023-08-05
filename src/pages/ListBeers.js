import Header from "../components/Header.js";
import { Link } from "react-router-dom";

const ListBeers = ({beers}) => {

    return (
        <>
                <Header />
                    {beers.map(beer => {
                        return (
                                <>
                                    <img src={beer.image_url} width="50px" />
                                    <h3>{beer.name}</h3> 
                                    <h4>{beer.tagline}</h4> 
                                    <p>Created by: {beer.contributed_by}</p> 
                                    <Link to={`/beers/${beer._id}`} >Details</Link>
                                </>
                    )
                })
                 }
           
        </>
   
    )
}

export default ListBeers;