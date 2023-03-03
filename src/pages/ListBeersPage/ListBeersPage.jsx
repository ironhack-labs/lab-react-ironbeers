import { useEffect, useState } from "react"
import { Container, Modal, Button } from "react-bootstrap"
import beersService from "../../services/beers.services"
import ListBeers from "../../components/ListBeers/ListBeers"


const ListBeersPage = () => {



    const [beers, setBeers] = useState([])

    useEffect(() => {
        beersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <Container>
            <h1>Beers List</h1>
            <ListBeers beers={beers} />
        </Container>
    )
}

export default ListBeersPage