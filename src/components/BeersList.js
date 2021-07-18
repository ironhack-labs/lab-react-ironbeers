import React from 'react';
import Header from './Header.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from  'react-router-dom';



function BeersList(props) {

const {beers} = props

    return (
        <div>
            <Header />
            Beers list
            {
                beers.map((beer, index) => {
                    return (

                    <Card key={index} style={{ width: '100%' }}>
                        <Card.Img  variant="left" src={beer.image_url} />
                        <Card.Body>
                            <Card.Title> 
                                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                                 
                            </Card.Title>
                            <Card.Subtitle style={{ color: 'grey' }}>
                            {beer.tagline}
                            </Card.Subtitle>
                            <Card.Text style={{ color: 'grey', fontSize: '13px' }}>
                            Created by: 
                            { beer.contributed_by}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    )
                })
            }

        </div>
    )
}
export default BeersList;