import './BeerCard.css'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Params } from 'react-router-dom'
import beersService from '../../services/beers.services'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'


const BeerCard = ({beer}) => {

    return (
        <Container className='beerCard'>
            <img src={beer.image_url} alt="one beer image" />

            <article className='detail'>
                <div className='titletag'>
                    <div>
                        <h2><strong>{beer.name}</strong></h2>
                        <p className='tag'>{beer.tagline}</p>
                        <p>{beer.description}</p>
                        <p className='tag'>{beer.contributed_by}</p>
                    </div>

                </div>
                <div className='lateral'>
                    <p >{beer.first_brewed}</p> <p>{beer.attenuation_level}</p>
                </div>

            </article>
        </Container>
    )
}

export default BeerCard