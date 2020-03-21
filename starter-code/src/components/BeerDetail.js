import React, { useEffect, useState } from "react";
import Layout from './Layout'
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const BeerDetail = (props) => {

    const [beers, setBeers] = useState([]);
    useEffect(() => {
        const id = props.match.params.id;
        const restBeersApi = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers/${id}`
        })
            
        const getListBeers = (restBeersApi) => {
            restBeersApi
            .get()
            .then(beers => setBeers(beers.data))
        }

        getListBeers(restBeersApi);
    }, []);

   
    return(beers.length == 0 ?
         <p>Loading...</p>

    :
        
            <p>hola</p>
            
        );
    
}


export default BeerDetail;