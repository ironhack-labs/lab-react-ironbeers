import Header from './Header.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Spinner} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function RandomBeer() {

    const [randomBeerDetail, updateRandomBeerDetail] = useState(null)


    useEffect(async () => {
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            updateRandomBeerDetail(response.data)
        }  
        catch(err){
            console.log('Random beer detail fetch failed', err)
        }
    }, [])

    if (!randomBeerDetail) {
        return <Spinner animation="border" variant="primary" />
    } 


    return (
        <div>
            <Header />
            <h1>Random beer:</h1>

            <Card className="detail-card" >
                        <Card.Img  variant="top !important" src={randomBeerDetail.image_url} />
                        <br/>
                        <Card.Body>
                            <Card.Title> 
                            {randomBeerDetail.name}
                            </Card.Title>
                            <Card.Subtitle style={{ color: 'grey' }}>
                            {randomBeerDetail.tagline}
                            </Card.Subtitle>
                            {randomBeerDetail.attenuation_level}
                            <br />
                            First brewed: {randomBeerDetail.first_brewed}
                            <Card.Text style={{ color: 'black', fontSize: '13px' }}>
                            Created by: 
                            { randomBeerDetail.description}
                            </Card.Text>
                            <Card.Text style={{ color: 'grey', fontSize: '10px' }}>
                            Created by: 
                            { randomBeerDetail.contributed_by}
                            </Card.Text>
                        </Card.Body>
                    </Card>

            
        </div>
    )
}
export default RandomBeer;