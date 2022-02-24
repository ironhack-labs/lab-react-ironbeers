import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import './Beers.css'
import beersService from './../../services/beers.service'

function Beers() {
    const [beers, setBeers] = useState([])
     useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = ()=> {
        beersService
            .getAllBeers()
            .then(({data})=>setBeers(data))
            .catch(err=> console.log(err))
    }
    return ( 
        <>
        <Container>
        {
            beers.map((beer)=>{
                return (

                    <Card style={{ width: '18rem' }} key={beer._id}>
                        <Card.Img variant="top" src={beer.image_url}/>
                        <Card.Body>
                            <Link to={`/beer-detail/${beer.beer_id}`}>
                            <Card.Title>{beer.name}</Card.Title>
                            </Link>
                            <Card.Text>
                            {beer.tagline}
                            Created by: {beer.contributed_by}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                )
            })
        }
        </Container>
        </>

     )
}

export default Beers