import axios from "axios"
import{useState,useEffect} from 'react'
import NavBar from "../../Components/NavBar/navbar";
import {Link} from "react-router-dom"

let apiURL="https://ih-beers-api2.herokuapp.com/beers";

function ListBeers(){
    let [fetching, SetFetching] = useState(false);
    let [beers, setBeers] = useState([]);
  
    useEffect(() => {
      axios.get(apiURL).then((response) => {
        
        setBeers(response.data);
        
        SetFetching(true);
      });
    });
  
    return (
    <div>
        
        <div>
            <NavBar/>
        </div>

        <div>
        {!fetching && <p>Loading</p>}
        {beers.map((beer)=>{
            return(
                <div key={beer._id}>
                <img src={beer.image_url}/>
                <Link to={`/beers/${beer._id}`}>
                                {beer.name}
                            </Link>
                <h1>{beer.tagline}</h1>
                <h4>Created by:{beer.contributed_by}</h4>
                </div>
            )
        })

        }
        </div>
        
    

    </div>
        
    );
}

export default ListBeers