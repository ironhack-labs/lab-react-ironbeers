import serviceApi from "../services/beer-api"
import { useEffect, useState } from "react"
import BeerCard from "../components/BeerCard/BeerCard"
import { Container, Col, Row } from "react-bootstrap"
import SearchForm from "../components/SearchForm/SearchForm"

const BeerList = () => {

    const [beerList, setBeerList] = useState([])

    const getBeersList = () => {
        serviceApi
            .getAllBeers()
            .then(({ data }) => setBeerList(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBeersList()
    }, [])



    return (
        <>
            <Container className="mt-5">
                <Row className="flex-column align-items-center">
                    <SearchForm setBeerList={setBeerList}></SearchForm>
                    {!beerList ? <h1>Cargando</h1> :

                        beerList.map(beer => {
                            return (
                                <Col md={6} key={beer._id}><BeerCard beer={beer}></BeerCard></Col>
                            )
                        })}
                </Row>
            </Container>

        </>
    )
}

export default BeerList