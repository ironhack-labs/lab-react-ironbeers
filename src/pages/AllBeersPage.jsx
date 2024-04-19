import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";

function AllBeersPage() {

    const [ beers, setBeers] = useState([]);
    const [filteredBeer, setFilteredBeers] = useState(beers);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((allBeers) => {
            console.log(allBeers.data)
            setBeers(allBeers.data)
        });
    }, []);

    if(beers.length === 0) {
        return <div>Loading...</div>;
    }

    const handleSearch = (searchTerm) => {
        const filtered = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredBeers(filtered);
    }
    

  return (
    <div>
        <div>
            <Searchbar onSearch={handleSearch}/>
        </div>
        <div className="list-group">
            {filteredBeer.map((beer) => {
                return <Link to={`/beers/${beer._id}`} key={beer._id} className="list-group-item list-group-item-action d-flex gap-4" aria-current="true">
                            <div style={{width:'50px'}} className="d-flex justify-content-center">
                                <img src={beer.image_url} style={{height:'100px'}}/> 
                            </div>
                            <div>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{beer.name}</h5>
                                </div>
                                <p className="mb-1">{beer.tagline}</p>
                                <small><b>Created by:</b> {beer.contributed_by}</small>
                            </div>
                        </Link>
            })}
        </div>
    </div>
    
  )
}

export default AllBeersPage