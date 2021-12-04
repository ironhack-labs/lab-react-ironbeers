import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Search from '../components/Search';
import { Link } from 'react-router-dom'

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${apiURL}`);
            const beersData = response.data;
            setBeers(beersData);
        }
        fetchData();
    }, [])

    return (
        <div className="col-auto">
            <Header />
            <Search setBeers={setBeers} />
            <h2>All beers page </h2>
            {beers && beers.map((oneBeer) => {
                return (
                    <Link
                        to={'/beers/' + oneBeer._id}
                        key={oneBeer._id}
                    >
                        <div className=" card">
                            <img src={oneBeer.image_url} alt='beers' style={{ width: '50px' }} />
                            <h3>{oneBeer.name}</h3>
                            <h3>{oneBeer.tagline}</h3>
                            <h3>Created by: {oneBeer.contributed_by}</h3>
                        </div >
                    </Link >
                )
            })}
        </div >
    );
}

export default AllBeersPage;