import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
function AllBeersPage() {
    const [fetching, setFetching] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [beers, setBeers] = useState([]);
    
    useEffect(() => {
        
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log(response)
            setBeers(response.data);
            setFetching(false);
        })
        .catch(console.error);
      }, []);

      
    useEffect(() => {
        if (searchValue) {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchValue}`)
            .then((response) => {
                setBeers(response.data);
                setFetching(false);
            })
            .catch(console.error);
        }
    }, [searchValue]);
    
    
    if (fetching) {
        return <p>Loading...</p>
    }
    return (
    
        <div className="container">
            
            <div className="list-group">
                <SearchBar setSearchValue={setSearchValue} />
                {beers.map((beer) => {
                    return (    
                    <Link key={beer._id} className="list-group-item list-group-item-action" to={`/beers/${beer._id}`}>
                        <img src = {beer.image_url} />
                        <h3>{beer.name}</h3>
                        <h4>{beer.tagline}</h4>
                        <h5>created by:{beer.contributed_by}</h5>
                    </Link>

                    )
                })}
            </div>
          </div>
    )
}
    









export default AllBeersPage;
