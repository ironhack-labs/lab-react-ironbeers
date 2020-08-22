import React from 'react'
import {Card} from 'react-bootstrap'

export default function BeerInfo(props) {
    const {beer} = props;
    return (
        <Card style={{width:'22rem',display:'flex',flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <img src={beer.image_url} alt='BeerImg' width='100px'/>
                <div style={{marginLeft: '10px'}}>
                    <h6>{beer.name}</h6>
                    <p style={{color:'gray'}}>{beer.tagline}</p>
                    <span>{beer.first_brewed}</span><span>{beer.attenuation_level}</span>
                    <p>{beer.description}</p>
                    <b><p>{beer.contributed_by}</p></b>   
                </div>
        </Card>
    )
}
