import NavUT from "../../components/nav/nav";
import { useState,useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import './Beers.css'
import axios from "axios";
import {Link} from 'react-router-dom'
const beerAPI = "https://ih-beers-api2.herokuapp.com/beers"


const Beers = () => {
    const [beers, setBeers] =useState([]);

    useEffect(() => {
        axios
        .get(beerAPI)
        .then(res => {
            console.log(res.data);
            setBeers(res.data);
        })
    }, [])

    return (
        <>
        <NavUT/>
        {beers.map((beer) => (
        <Card>
            <Card.Img variant="top" src={beer.image_url} />
            <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Link to={`/#`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">Ver detalles</Button>
                    </div>
                </Link>
                <p>Created by: {beer.contributed_by}</p>
            </Card.Body>
        </Card >
         ) )}
        </>
    )
}

export default Beers