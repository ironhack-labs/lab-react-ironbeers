import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BeersImage from '../../assets/beers.png'
import NewBeer from '../../assets/new-beer.png'
import RandomBeer from '../../assets/random-beer.png'


const IndexPage = () => {
    return (
        <Container>
            <h1>IRON Beers</h1>
            <hr />
            <article>
                <img className='card-img-top' src={BeersImage}  alt='all-beers-img'/>
            <Link to="/beers" className="btn btn-dark">All beers</Link>
            </article>
            <article>
                <img className='card-img-top' src={NewBeer}  alt='all-beers-img'/>
            <Link to="/random-beer" className="btn btn-dark">Random beer</Link>
            </article>
            <article>
                <img className='card-img-top' src={RandomBeer}  alt='all-beers-img'/>
                
            <Link to="/new-beer" className="btn btn-dark">New beer</Link>
            </article>
        </Container>
    )
}

export default IndexPage
