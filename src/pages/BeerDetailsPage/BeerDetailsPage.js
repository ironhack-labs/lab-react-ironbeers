import React from "react";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./BeerDetailsPage.css"
import HeaderNav from "../../components/Header/HeaderNav";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
    const [beer, setBeer] = useState(null);
    const [isLoading, setIsLoading ] = useState(true);

    const {beerId} = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        const fetchData = async () => {
          const response = await axios.get(`${apiURL}/${beerId}`);
          const oneBeerData = response.data;
            
          setBeer(oneBeerData);
          setIsLoading(false)
        }
    
        fetchData();
    
      }, [])


    if (isLoading) return <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner" />



    return ( 
        <>
        <HeaderNav />

        <div className="beer-details-card">
            <img src={beer.image_url} alt="beer" width="80" />
            <div className="beer-heading">
                <h2>{beer.name}</h2>
                <p className="level">{beer.attenuation_level}</p>
            </div>
            <div className="beer-subheading">
                <p className="tagline">{beer.tagline}</p>
                <p><strong>{beer.first_brewed}</strong></p>
            </div>
            <p>{beer.description}</p>
            <p className="contributor">{beer.contributed_by}</p>

            <button onClick={() => navigate(-1)}>Back</button>
        </div>
        </>
     );
}

export default BeerDetailsPage;