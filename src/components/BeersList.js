import React from 'react'
import Nav from './Nav'
import {Spinner, Container, Form} from 'react-bootstrap'
import BeerCard from './BeerCard'
import {Link} from 'react-router-dom';

export default function BeersList(props) {

    const {beers, onSearch} = props

    return (
        <div>
            <Nav />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Form.Control onChange={onSearch} style={{margin: '10px', width: '90%'}} placeholder="Search for a beer"></Form.Control>
            </div>
            <Container fluid>
            {
                !props.found ? <p>No beer found, please try again</p> :
                !beers.length ? 
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Spinner animation="border" variant="primary" role="status"></Spinner>
                </div> 
                :
                beers.map((beer, i) => {
                    return <Link key={'beer' + i} className="home-link" to={`/beers/${beer._id}`}><BeerCard beer={beer}/></Link>
                }) 
            }
            </Container>
        </div>
    )
}
