import { Link } from "react-router-dom";

function Beers({beers}) {
    return ( 
        <div>
        {beers.map(beer =>{
            return(
                <div>
                <Link key={beer._id} to={`/Beers/${beer._id}`}>
                <img style={{height:"200px"}} src={beer.image_url} alt="alta birra"/>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <h5>{beer.contributed_by}</h5> </Link>

                </div>
            )
        })}
        </div>
     );
}

export default Beers;