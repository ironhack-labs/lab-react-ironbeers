import React from 'react';
import homeLinkHeader from '../assets/ironhack-lab-react-ironbeers-home-header.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllBeers = () => {
    const [allBeers, setAllBeers] = React.useState([]);
    const [searchBeers, setSearchBeers] = React.useState([...allBeers]);

    const searchBeer = (e) => {
        console.log("searchBeer called!");
        let search = e.target.value;

        let beerResults = allBeers.filter((beer) => {
            return beer.name.toLowerCase().includes(search.toLowerCase());
        });

        setSearchBeers(beerResults);
    }

    React.useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((results) => {
                setSearchBeers(results.data);
                setAllBeers(results.data);
                console.log(results.data);
            })
            .catch((err) => {
                console.error(err.message);
            })
    }, []);

    return (
        <div>
            <header>
                <Link to="/">
                    <img className="homeLinkHeader" src={homeLinkHeader} alt="Link to Homepage"/>
                </Link>
            </header>
            <h1>All Beers Page</h1>
            <h3>Search for a beer: </h3>{"  "}
            <input type="text" onChange={(e) => searchBeer(e)}/>
            {searchBeers.map((beer, i) => {
                return (
                    <div key={i} className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={beer.image_url} style={{height:300, width:"100%"}} alt={beer.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{beer.name}</h5>
                            <p className="card-text">{beer.tagline}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{beer.contributed_by}</li>
                        </ul>
                        <div className="card-body">
                            <Link to={`/beers/${beer._id}`} className="card-link">Learn More</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default AllBeers;