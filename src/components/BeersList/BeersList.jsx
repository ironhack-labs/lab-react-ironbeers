import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const BeerList = () => {

    const [beersApi, setBeersApi] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeersApi(response.data)
            }, [])
    })

    return (
        <div className="col-4" style={{ maxHeight: '80vh', overflow: 'scroll' }}>
            <div className="list-group">
                {
                    beersApi.map((beer) => (
                        <Link to={`/beers/${beer._id}`}
                            key={beer._id}

                            className="list-group-item list-group-item-action">
                            <img src={beer.image_url} />
                            <h1>{beer.name}</h1>
                            <p>{beer.tagline}</p>
                            <p>Cretated by: {beer.contributed_by}</p>
                        </Link>


                    ))}
            </div>
        </div >

    )
}

export default BeerList;