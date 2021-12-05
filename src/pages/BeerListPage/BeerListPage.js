import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../../components/Header/HeaderNav";
import styles from "./BeerListPage.css"
import axios from "axios";
import SearchBeerForm from "../../components/SearchFoodForm.css/SearchBeerForm";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerListPage() {
    const [beers, setBeers] = useState([]);
    const [allBeers, setAllBeers] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(apiURL)
            const beersData = response.data;

            setBeers(beersData);
            setAllBeers(beersData);

        }
    fetchData();

    }, [])

    //Function - search foods from SearchFood,js
    const searchBeerList = (queryString) => {
        const searchedBeers = allBeers.filter((beer) => {
            return beer.name.toLowerCase().includes(queryString.toLowerCase());
        })

        setBeers(searchedBeers);
       
    }    

    console.log(beers)
    return ( 
        <div>
        <HeaderNav />

        <SearchBeerForm searchBeerList={searchBeerList}/>

        {beers && beers.map((oneBeer) => {
            return (
            <Link key={oneBeer._id} to={`/beers/${oneBeer._id}`}>
            <div className="beer-list-card">
                <div className="beer-card-image-col">
                    <img src={oneBeer.image_url} alt="beer" />
                </div>
                <div className="beer-card-info-col">
                    <h3>{oneBeer.name}</h3>
                    <p>{oneBeer.tagline}</p>
                    <strong><p>Created by {oneBeer.name}</p></strong>
                </div>
            </div>
            </Link>
        )
        })}

        </div>
     );
}

export default BeerListPage;