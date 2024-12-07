import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState();
    const [search, setSearch] = useState("");
    const getAllBeers = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => setBeers(response.data))
            .catch(err => console.error(err));
    };
    useEffect(() => {
        getAllBeers();
    }, []);

    const adaptedString = (string) => (
        string.slice(
            string[0],
            string.indexOf('<')
        )
    )
    const getFilteredBeers = () => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
        .then(response => setBeers(response.data))
        .catch(err => console.error(err));
    }
    useEffect (() => {
        getFilteredBeers()
    },[search])
    const handleChange = e => setSearch(e.target.value);
    return (
        <>  
        <div className="container  mb-5 ">
            <form className="mx-0  mw-100 d-flex">
                <label className="fs-1 me-3" htmlFor="search">Search</label>
                <input
                    className="px-2 fs-4 mt-3 mb-2 col-10"
                    type="search"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleChange}
                />
            </form>
        </div>
        <hr />
            {beers && beers.map((beer) => (
                <Link key={beer._id} to={`/beers/${beer._id}`}>
                    <div className="container gap-5 d-flex flex-row">
                        <div className="col-2">
                            <img className="img-fluid" src={beer.image_url} alt={beer.name} />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h2 style={{ color: "black", fontSize: "3rem" }}>{beer.name}</h2>
                            <p style={{ color: "gray", fontSize: "2rem" }}>{beer.tagline}</p>
                            <p style={{ color: "black" }}><b>Created by:</b> {adaptedString(beer.contributed_by)}</p>
                        </div>
                    </div>
                    <hr />
                </Link>
            ))}
        </>
    );
}

export default AllBeersPage;
