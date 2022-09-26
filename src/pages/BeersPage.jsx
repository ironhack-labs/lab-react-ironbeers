import NavBar from "../components/NavBar"
import Beer from "../components/Beer"
import beerAxios from "../services/beerAxios"
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react'

function BeersPage() {
    const beers = new beerAxios();
    const [allBeers, setAllBeers] = useState([])

    useEffect(() => {
        beers.getAllBeers()
            .then((newBeers) => {
                console.log(newBeers)
                setAllBeers(newBeers)
            })
            .catch((err) => console.log(err))
    }, [])

    console.log(allBeers)

    return (
        <div>
            <NavBar></NavBar>
            <ListGroup>
                {allBeers.map((beer) => {
                    return <ListGroup.Item key={beer._id} ><Beer beer={beer} /></ListGroup.Item>
                })}
            </ListGroup>
        </div>
    )
}

export default BeersPage