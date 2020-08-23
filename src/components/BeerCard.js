import React from 'react'
import {Col, Row} from 'react-bootstrap'

export default function BeerCard(props) {

    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px'
    }

    const {image_url, name, tagline, contributed_by} = props.beer

    return (
        <>
        <Row style={cardStyle}>
            <Col xs={4} style={{display: 'flex', justifyContent:'center'}}> 
                <img style={{widht: '7rem', height: '7rem'}} src={image_url} alt="beer"></img>
            </Col>
            <Col xs={7} style={{padding: '20px 0px'}}>
                <h5 style={{fontSize: '18px'}}>{name}</h5>
                <p style={{color: 'darkgray', fontSize: '15px', margin: '0px'}}>{tagline}</p>
                <p style={{fontSize: '10px', padding: '0px'}}>Created by: {contributed_by}</p>
            </Col>
        </Row>
        <hr style={{height:"2px", borderWidth:"0", color:"gray", backgroundColor: "lightgray"}}></hr>
        </>
    )
}
