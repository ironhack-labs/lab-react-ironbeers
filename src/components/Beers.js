import Header from "./Header";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Beers({beers}){
    const [searchParams, setSearchParams] = useSearchParams({q: ""});
    const query = searchParams.get("q")

    const [filtered, setFiltered] = useState(beers)

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
          .then((response) => {
            console.log(response.data)
            setFiltered(response.data);
          })
          .catch((e) => console.log("error getting random beer from API", e));
      }, [query]);
    
    return(
        <div>
            <Header />
            <label>Search: </label>
            <input type="text" value={query} onChange={e => setSearchParams({q: e.target.value})}/>
            {filtered.map((beer)=>{
                return(
                    <div key={beer._id}>
                        <img src={beer.image_url} alt={beer.name}/>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>More Details</Link>
                        <br/>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default Beers;
