import Homelink from "../components/Header/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard/BeerCard";
import beersService from "../ApiService/ApiService";



const BeerDetails = () => {

    const { id } = useParams();

       const [beer, setBeer] = useState([]);

       useEffect(() => {
           beersService
               .getOneBeer(id)
               .then(({ data }) => {
                   setBeer(data);
               })
               .catch((err) => console.log(err));
       }, []);
    return (
        <>
            <Homelink />
            <BeerCard { ...beer }/>
            
        </>
    );
};

export default BeerDetails;
