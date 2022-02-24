import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import { Link, useSearchParams } from 'react-router-dom'
import './Beers.css'

const Beers = () => {

    const [beers, setBeers] = useState([])
    const [beersData, setBeersData] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response.data)
                setBeers(response.data)
                setBeersData(response.data)
            })
    }, [])


    const [searchParams, setSearchParams] = useSearchParams()
    const [firstLetter, setFirstLetter] = useState("");

    const handleSearch = e => {
        setSearchParams({ search: e.target.value })
        setFirstLetter(e.target.value)
        showFilteredBeer(firstLetter)
    }

    //const beerToFilter = searchParams.get("search")

    const showFilteredBeer = str => {
        let filteredBeer

        if (str.toLowerCase() === '') {
            filteredBeer = [...beersData]
            setBeers(filteredBeer)
        } else {
            filteredBeer = beersData.filter((beer) => beer.name.toLowerCase().includes(str.toLowerCase()))
            setBeers(filteredBeer)
        }

    }


    return (
        <section className='beersList'>
            <Header />
            <form>
                <label>Search Beer</label>
                <input type="text" value={firstLetter} onChange={handleSearch} />
            </form>
            <ul>
                {
                    beers.map(elm => {
                        return <li key={elm._id}>
                            <Link to={`/beers/${elm._id}`} className="eachBeer">
                                <img src={elm.image_url} />
                                <div>
                                    <h3>{elm.name}</h3>
                                    <p>{elm.tagline}</p>
                                    <p><strong>Created by:</strong>{elm.name}</p>
                                </div>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </section>
    )
}

export default Beers