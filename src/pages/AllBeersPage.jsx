import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers]= useState([]);
    const [searchedBeers, setSearchedBeers] = useState([])
    const [searchQuery, setSearchQuery] = useState("")


    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response)=>{
                
            setBeers(response.data);
        })
    },[])

    const handleSearch = (e)=>{
        e.preventDefault();

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`).
        then((response)=>{
            setSearchedBeers(response.data)
            const filteredBeers = beers.filter((result)=>{
                result === response;
            })
            setBeers(filteredBeers)
                
        }, [])


}    
    
    return (
        <section>
            <h3> List of Beers</h3>
            <div>
                <form onChange={handleSearch}>
                <label> Search
                        <input
                            type="text"
                            name="q"
                            placeholder="Search by beer Name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} 
                        />
                    </label>
                </form>
            </div>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
            {(searchedBeers.length > 0 ? searchedBeers : beers).map((beer) => (
                    <div
                        key={beer._id}
                        style={{
                            border: "1px solid white",
                            padding: "20px",
                            margin: "20px",
                        }}
                    >
                        <img src={beer.image_url} width={"100px"} alt={beer.name} />
                        <Link to={`/beers/${beer._id}`}>
                            <h3>{beer.name}</h3>
                        </Link>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default AllBeersPage;
