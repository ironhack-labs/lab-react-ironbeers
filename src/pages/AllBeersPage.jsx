import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function AllBeersPage() {


    const [beers, setBeers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBeers, setFilteredBeers] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
            console.log("response.data", response.data);
            setBeers(response.data);
        });
    }, []);

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
            .then((response) => {
                setFilteredBeers(response.data);
            });
    }, [searchQuery]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    return (

        <div>
        <h1>All Beers</h1>
  
        <input
          type="text"
          placeholder="Search beers..."
          value={searchQuery}
          onChange={handleInputChange}
        />
  
        {filteredBeers.length > 0 ? (
          filteredBeers.map((beer) => (
            <div key={beer._id} className="beer-card">
              <Link to={`/beers/${beer._id}`}>
                {beer.name}
                <img src={beer.image_url} alt="beer-image" />
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
                <br />
              </Link>
            </div>
          ))
        ) : (
          <p>No matching beers found.</p>
        )}
      </div>






    )
}

export default AllBeersPage;
