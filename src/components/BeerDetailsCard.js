import React from 'react'
import {Spinner} from 'react-bootstrap'

export default function BeerDetailsCard(props) {

    const {image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by} = props.beer

    return (
        <div>
        {
            !props.beer ? <Spinner animation="border" variant="primary" role="status"></Spinner>  : 
            <>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '80px'}}>
                <img src={image_url} style={{widht: '15rem', height: '15rem', textAlign: 'center'}} alt="beer"></img>
            </div>
            <div style={{margin: '10px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h3>{name}</h3>
                    <h4 style={{color: 'darkgray'}}><strong>{attenuation_level}</strong></h4>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{color: 'darkgray', margin: '0px'}}><strong>{tagline}</strong></p>
                    <p><strong>{first_brewed}</strong></p>
                </div>
                <p>{description}</p>
                <p style={{color: 'darkgray', fontSize: '10px', padding: '0px'}}><strong>{contributed_by}</strong></p>
            </div>
            </>
        }
        </div>
    )
}
