import { useEffect, useState } from "react"
import beerApiService from '../../Services/beerApi.service'
import { Col, Row } from "react-bootstrap"
import BeerCard from "../../components/BeerCard/BeerCard"
import './Beers.css'

const Beers = () => {

    const [beers, setBeers] = useState([])
    const [query, setQuery] = useState('')

    const loadBeers = () => {
        beerApiService
            .getBeers()
            .then(({ data }) => {
                console.log(data)
                const ascSortedBeers = [...data]
                ascSortedBeers.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                setBeers(ascSortedBeers)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (query !== '') {
            beerApiService
                .searchBeers(query)
                .then(({ data }) => {
                    console.log(data)
                    const ascSortedBeers = [...data]
                    ascSortedBeers.sort((a, b) => {
                        return a.name.localeCompare(b.name)
                    })
                    setBeers(ascSortedBeers)
                })
                .catch(err => console.log(err))
        } else {
            loadBeers()
        }
    }, [query])

    const handleQueryChange = e => {
        const inputValue = e.target.value
        setQuery(inputValue)
    }

    useEffect(() => {
        loadBeers()
    }, [])

    if (!beers) {
        return <p>loading...</p>
    } else {

        return (
            <section className="Beers">
                <h1 className="titleAllBeers">IronBeers</h1>
                <hr className="hrAllBeers" />
                <form className="SearchBar mb-4">
                    <input type="text" placeholder=" Search for a beer" value={query} onChange={handleQueryChange} />
                </form>
                <Row>
                    {beers.map(elm => {
                        return (
                            <Col sm={12} md={6} lg={4} key={elm._id} >
                                <BeerCard {...elm} />
                            </Col>
                        )
                    })}
                </Row>
            </section>
        )
    }
}

export default Beers

