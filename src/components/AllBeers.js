import React  from 'react'
import './AllBeers.css'

import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function AllBeers(props) {
    
    // console.log( 'PROPS',props)



    return (
        <div>
            
            <div className="bodyBeers">
            {
                props.Allbeers.map((beer)=>{
                    console.log(beer._id)
                    return (
                        <Link style={{textDecoration: 'none'}} to = {`/beer/${beer._id}`}>
                        <Card className="Allbeers-card">
                            <img  alt ="imageBeer" src={beer.image_url}/>
                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>
                                <Card.Text>
                                    {beer.tagline}<br/>
                                    <small>Created by: {beer.contributed_by}</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )
}

export default AllBeers
