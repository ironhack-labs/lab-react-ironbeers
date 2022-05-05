// import { useState } from 'react'
// import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import beersService from '../services/beers.service'

const Beers = ({ title, director, IMDBRating }) => {

    const [beers, setBeers] = useState([])
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))

            .catch(err => console.log(err))
    }

    const loadBeersWithQuery = (query) => {
        beersService
            .getBeersWithQuery(query)
            .then(({ data }) => setBeers(data))

            .catch(err => console.log(err))
    }

    const handleSearch = e => {
        if
            (e.target.value === "") {
                loadBeers()
        }
        else {
            setSearchInput(e.target.value)
            loadBeersWithQuery(searchInput)
        }


    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="Beers">
            Beers
            <Header />
            <form onSubmit={handleSubmit}>
                <label>
                    Search
                    <input type="text" value={searchInput} name="name" onChange={handleSearch} />
                </label>
            </form>
            {beers.map(beer => {

                return (
                    <div>
                        <img src={beer.image_url} alt="" />
                        <Link to={beer._id}><p>{beer.name}</p></Link>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </div>

                )
            })}
        </div>
    );
}

export default Beers;