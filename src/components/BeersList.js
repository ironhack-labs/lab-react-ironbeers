import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";

export default function BeersList() {
    const [beers, setBeers] = useState(null)

    useEffect(() =>{
        axios.get(process.env.REACT_APP_APIURL)
            .then((res) => {setBeers(res.data)})
            .catch((err)=> {console.log(err);})
    }, [])

    const renderBeers = () => {
        return (
            <>
                { beers.map(beer => {
                    return (
                        <div key={beer._id}>
                            <img src={beer.image_url} alt={beer.name} />
                            <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                            <h4>{beer.tagline}</h4>
                            <p>Created by: {beer.contributed_by}</p>
                            <hr />
                        </div>
                    );
                }) }
            </>
        );
    };

    return (
        <>
            <Header/>

            <section>
                {beers ? renderBeers() : <h1>Loading...</h1>}
            </section>
        </>
    )
}