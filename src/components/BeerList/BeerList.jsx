import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BeerList.css";
import { fetchAllBeers } from "../../services/beers-service.js";
import { searchBeer } from "./../../services/beers-service";

export default function BeersList ({ search }) {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getBeers = async () => {
        const result = await fetchAllBeers();
        setBeers(result.data);
        setLoading(false);
    };

    const filterBeers = async () => {
      const result = await searchBeer(search);
      setBeers(result.data);
      setLoading(false);
    };

    useEffect(() => {
        if (!search) {
            getBeers();
        } else {
            filterBeers();         
        }        
    },[search])

    return (            
        loading ? 'Loading...' 
        : beers.map((beer) => {
            return (
                <Link to={'/beers/'+ beer._id} className="Beer-container" key={beer._id}>
                    <div className="div-img">
                        <img height={150} src={beer.image_url} alt="beer"></img>
                    </div>
                    <div className="Beer-info-container">
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <strong>
                        Created by:{" "}
                        {beer.contributed_by
                            .replace("<samjbmason>", "")
                            .replace("<AliSkinner>", "")}
                        </strong>
                    </div>
                </Link>
            )
        })
    )
}
