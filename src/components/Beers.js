import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Beers({beers}) {


    return(
        <>
        <NavBar />    

        <h1>List of beers</h1>
        {beers.map( (beer) => {
            return (
              <div className="box">
                <img src={beer.image_url} />
                <h3>Name: {beer.name}</h3>
                <p>Tagline: {beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>

      
                <Link to={`/beers/${beer._id}`} key={beer._id}>More details</Link>
              </div>
            );
            })}
         
        </>
    )
}

export default Beers;