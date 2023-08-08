import Header from "../components/Header";
import { Link } from "react-router-dom";

function Beers ({beers}) {

    return(
        <div>
            <Header/>
            <h3> List of beers </h3>
            <br />
            {
                beers.map(beer => (
                    <Link to={`/beers/${beer._id}`} style={{color: 'black', textDecoration: 'none'}}>
                        <div className="card row" style={{display: "flex", justifyContent: "space-between"}}>
                            <img src={beer.image_url} alt="beer" style={{width: '100px'}}/>
                            <h3>{beer.name}</h3>
                            <h4>{beer.tagline}</h4>
                            <p><strong>Created by: </strong> {beer.contributed_by} </p>
                        </div>                    
                    </Link>
                    
                  ))                
            }
        </div>
    )    
}

export default Beers;