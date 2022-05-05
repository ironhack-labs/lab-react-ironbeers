import Homelink from "../components/Header/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import BeersList from "../components/BeersList/BeersList";
import beersService from "../ApiService/ApiService";

const Beers = () => {
    const [beersData, setBeersData] = useState([]);

    useEffect(() => {
       
        beersService
            .getAllBeers()
            .then(({ data }) => {
                setBeersData(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Homelink />
            <BeersList beersData={beersData} />
        </>
    );
};

export default Beers;
