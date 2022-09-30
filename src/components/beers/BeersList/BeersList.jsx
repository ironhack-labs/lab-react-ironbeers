import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fetchAllBeers, searchBeer } from './../../../services/beerServices';

export default function BeersList() {
    const [beers, setBeers] = useState('')
    const [searchText, setSearch] = useState('')

    const handleOnChange = (event) => {
        const { value } = event.target
        setSearch(value)
    }

    const beersToRender = (beers) => {
        if (beers === '') {
            return (
                <div className="beers-list">
                    <p>Loading beers...</p>
                </div>
                )
        } else if (beers === []) {
            return (
            <div className="beers-list">
                <p>No beers found</p>
            </div>
            )
        } else {
            return (
                <div className="beers-list">
                    {beers.map((beer) => (
                        <Link to={`/beers/${beer._id}`} className="link">
                            <div key={beer._id} className="beers-list-beer">
                                <div className="beers-list-beer-img">
                                    <img src={beer.image_url} alt={beer.name} height="150px" />
                                </div>
                                <div className="beers-list-beer-details">
                                    <h3>{beer.name}</h3>
                                    <p>{beer.tagline}</p>
                                    <small>{beer.contributed_by}</small>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )
        }
    }

    useEffect(() => {
        if(searchText === '') {
            fetchAllBeers()
            .then((beersData) => {
                setBeers(beersData.data)
            })
        } else {
            searchBeer(searchText)
            .then((beersData) => {
                setBeers(beersData.data)
            })
        }
    }, [searchText]);

    return (
        <div className="BeersList">
            <div>
                <input type="search" placeholder="Search"
                value={searchText} onChange={handleOnChange}/>
            </div>
            { beersToRender(beers) }
        </div>
    )
}
