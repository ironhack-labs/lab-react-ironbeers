import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './index.css'

export default () => {
    return (
        
        <Container>
            <div class= "main">
            <Link to="/allbeers">
            <img src = "https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza.png"/>
                <h3>All beers </h3>
            </Link>
           <p>loremimpsumloremhahahahabelenloremjjahahah</p>
           </div>
           <div class= "main">
            <Link to="/allBeers">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNCHkX-aUFs6YHhkVkUzRRKlvUpwII5px_tg&usqp=CAU"/>
                <h3>Random Beer</h3>
            </Link>
           <p>loremimpsumloremhahahahabelenloremjjahahah</p>
           </div>
           <div class= "main">
            <Link to="/allBeers">
            <img src = "https://www.lavanguardia.com/files/image_449_220/uploads/2018/10/01/5e997e89af554.jpeg"/>
                <h3>New beer </h3>
            </Link>
           <p>loremimpsumloremhahahahabelenloremjjahahah</p>
           </div>
        </Container>
    
    )
}