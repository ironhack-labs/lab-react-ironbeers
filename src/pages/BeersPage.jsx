import { useEffect, useState } from 'react'
import ironbeersService from '../services/ironbeers.service'
import { Container, Form } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'

const BeersPage = () => {
    const [disData, setDisData] = useState([])
    const [searchName, setSearchName] = useState('')
    const [disDataCopy, setDisDataCopy] = useState([])

    useEffect(() => {
        ironbeersService
            .getAllBeers()
            .then(({ data }) => {
                setDisData(data)
                setDisDataCopy(data)
            })
            .catch(err => console.log(err))
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()

    const handleSearch = e => {
        setSearchParams({ search: e.target.value })
        setSearchName(e.target.value)
        showFilteredBeers(searchName)
    }

    const showFilteredBeers = str => {
        let filteredBeers
        let input = str.toLowerCase()

        if (input === '') {
            filteredBeers = [...disDataCopy]
            setDisData(filteredBeers)
        }
        else {
            filteredBeers = disDataCopy.filter(beer => beer.name.toLowerCase().includes(input))
            setDisData(filteredBeers)
        }
    }

    return (
        <>
            <Container>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Search for a beer</Form.Label>
                    <Form.Control type="text" value={searchName} onChange={handleSearch} />
                </Form.Group>
                {
                    disData.map(eachBeer => {
                        return (
                            <Link to={`/beers/${eachBeer._id}`}>
                                <div className='allBeersCard' key={eachBeer._id}>
                                    <img src={eachBeer.image_url} alt={eachBeer.name} />
                                    <div className='allBeersCardSideText'>
                                        <h3>{eachBeer.name}</h3>
                                        <p>{eachBeer.tagline}</p>
                                        <p>{eachBeer.contributed_by}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default BeersPage