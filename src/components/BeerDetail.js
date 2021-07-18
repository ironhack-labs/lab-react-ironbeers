import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import {Spinner} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function BeerDetail(props) {

    const [beerDetail, updateBeerDetail] = useState(null)

    useEffect(async () => {
        try {
            let beerId = props.match.params.id
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
            updateBeerDetail(response.data)
        }  
        catch(err){
            console.log('Beer detail fetch failed', err)
        }
    }, [])

    if (!beerDetail) {
        return <Spinner animation="border" variant="primary" />
    } 


    return (
        <div>
            <Header />
            <Card className="detail-card" >
                        <Card.Img  variant="top !important" src={beerDetail.image_url} />
                        <br/>
                        <Card.Body>
                            <Card.Title> 
                            {beerDetail.name}
                            </Card.Title>
                            <Card.Subtitle style={{ color: 'grey' }}>
                            {beerDetail.tagline}
                            </Card.Subtitle>
                            {beerDetail.attenuation_level}
                            <br />
                            First brewed: {beerDetail.first_brewed}
                            <Card.Text style={{ color: 'black', fontSize: '13px' }}>
                            Created by: 
                            { beerDetail.description}
                            </Card.Text>
                            <Card.Text style={{ color: 'grey', fontSize: '10px' }}>
                            Created by: 
                            { beerDetail.contributed_by}
                            </Card.Text>
                        </Card.Body>
                    </Card>

            <img  />
            <h4>
                
            </h4>
            
        </div>
    )
}
export default BeerDetail;