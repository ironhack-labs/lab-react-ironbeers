import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Col } from 'antd'


function AllBeersPage() {

    const [beers, setBeers] = useState([])
    const [searchBeers, setSearchBeers] = useState('')

    useEffect(() => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((allBeers) => {
            console.log(allBeers.data)
            setBeers(allBeers.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeers}`)
        .then((response) => {
            setBeers(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [searchBeers])

    return (
        <div>
        <label>
            <b>Search for a beer:</b>
            <input type="text" value={searchBeers} onChange={(e) => {setSearchBeers(e.target.value)}}/>
        </label>
        <Col className='beer-catalogue'>
            {beers && beers.map((oneBeer) => {

                return (
                    <Link key={oneBeer._id} to={`/beers/${oneBeer._id}`}>
                        <Card className='beer-div'>
                            <div>
                                <img src={oneBeer.image_url} alt={oneBeer.name} height='105'/>
                            </div>
                            <div>
                                <h2>{oneBeer.name}</h2>
                                <h4>{oneBeer.tagline}</h4>
                                <h6>Created by: {oneBeer.contributed_by}</h6>
                            </div>
                        </Card>
                    </Link>
                )
            })}
        </Col>
        </div>
    )
}

export default AllBeersPage;
