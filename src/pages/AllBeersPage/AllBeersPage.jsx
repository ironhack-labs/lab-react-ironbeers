import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import BeerCard from "../../components/BeerCard/BeerCard"
import beerService from "../../services/beers.services"

const AllBeersPage = () => {

    const [allBeers, setAllBeers] = useState([])


    const loadBeers = () => {
        
        beerService
            .getAll()
            .then(({ data }) => setAllBeers(data))
            .catch(err => console.log(err))
                
    }

    useEffect(() => {
        loadBeers()
    }, [])
    
    return (
        
        <Container className="mt-5">
            <Row>
                    {allBeers.map(beer => {

                        return (
                            <Col  key={beer._id} className="mb-3" md={{ span: 3 }}>
                                <BeerCard {...beer} />
                            </Col>
                        )

                    })}
                
            </Row>
            

        </Container>
    )
}

export default AllBeersPage