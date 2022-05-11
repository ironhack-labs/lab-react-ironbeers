import { useState, useEffect } from "react"; 
import axios from "axios"; 
import {Link} from "react-router-dom";
import NavBar from './NavBar'

function ListBeers() {
    const [beers, setBeers] = useState([])
  
    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
               // console.log('resp data', response.data)
                setBeers(response.data)
            })
    }, []);

    return (
        <div>
        <NavBar/>
        <h3>All Beers</h3>
        {beers.map((beer) => (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.title}</h3>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Check the details</Link>
          </div>
        ))}
        
      </div>
    )
}

export default ListBeers;
