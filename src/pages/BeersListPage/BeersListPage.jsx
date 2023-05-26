import { Container, Row } from "react-bootstrap"
import beersService from "../../services/beers.services"
import BeerList from './../../components/BeerList/BeerList'
import { useEffect, useState } from "react"



const BeersListPage = () => {

    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <h1>BEER GALERY</h1>
            <Row>
                {
                    !beers
                        ?
                        <h1>CHARGING...</h1>
                        :
                        <BeerList beers={beers} />
                }
            </Row>
        </Container>

    )

}
export default BeersListPage