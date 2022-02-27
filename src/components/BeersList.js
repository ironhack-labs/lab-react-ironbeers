import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import homeImg from '../assets/home.png'


function BeersList(props) {
    const [searchQuery, setSearchQuery] = useState('')
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }
    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
            .then(response => {
                props.setBeers(response.data)
            })
            .catch(err => console.log(err))
        return () => {

        }
    }, [searchQuery])  //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section id='beerlist-page'>
            <div className="beers-container">
                <header id="header">
                    <Link to='/'>
                        <img class="logo" src={homeImg} alt="home button" />
                    </Link>
                </header>
                <h1>Beers List</h1>
                <div className="container col-5 mb-4">
                    <input type="search" id='search' className="form-control col-6" onChange={handleInputChange} value={searchQuery} placeholder="Search Beer" />
                </div>
                <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4 ">
                    {props.beers.map(beer => {
                        return (
                            <div className='col'>
                                <div className="card mb-3 mx-auto text-dark mb-2 beer-card" style={{ maxWidth: "450px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={beer.image_url} id="beer-img" className="img-fluid rounded-start d-block mx-3 my-3" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{beer.name}</h5>
                                                <p className="card-text text-muted"> {beer.tagline}</p>
                                                <p className="card-text"><small>Created by: {beer.contributed_by} </small></p>
                                                <Link to={`/beers/${beer._id}`} className="btn btn-success">Beer Details</Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </section>
    )
}

export default BeersList