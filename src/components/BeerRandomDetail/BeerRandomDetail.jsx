import { useState, useEffect, } from 'react'
import beersService from '../../services/beers.service'
import { Container, Card } from 'react-bootstrap'
import {  useParams } from 'react-router-dom'

function BeerDetail() {
    const [beer, setBeer] = useState([])
     useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = ()=> {
        beersService
            .getRandomBeer()
            .then(({data})=>setBeer(data))
            .catch(err=> console.log(err))
    }
    return ( 
        <>
        {

           
                                <Card style={{ width: '18rem' }} key={beer._id}>
                        <Card.Img variant="top" src={beer.image_url}/>
                        <Card.Body>
                         
                            <Card.Title>{beer.name}</Card.Title>
                            
                            <Card.Text>
                            {beer.tagline}<br/>
                            {beer.first_brewed}<br/>
                            {beer.attenuation_level}<br/>
                            {beer.description}<br/>
                            Created by: {beer.contributed_by}
                            </Card.Text>

                        </Card.Body>
                    </Card>
            
            }
        
        </>

     )
}

export default BeerDetail