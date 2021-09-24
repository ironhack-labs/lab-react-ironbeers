import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import image1 from '../../../assets/beers.png'
import image2 from '../../../assets/new-beer.png'
import image3 from '../../../assets/random-beer.png'
import './Home.css'

export default function HomePage (){

    return(
        <Container>
        <Link className='unstyle' to='/cervezas'>
            <h2>All Beers</h2>
            <img className='img-home' src={image1} alt='all-beers'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie justo ut egestas suscipit. Sed ullamcorper pretium neque blandit ullamcorper. Maecenas turpis tellus, ullamcorper vel luctus nec, dapibus in libero.</p>
        </Link>
        <Link className='unstyle' to='/random'>
            <h2>Random Beer</h2>
            <img className='img-home' src={image3} alt='random-beer'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie justo ut egestas suscipit. Sed ullamcorper pretium neque blandit ullamcorper. Maecenas turpis tellus, ullamcorper vel luctus nec, dapibus in libero.</p>
        </Link>
        <Link className='unstyle' to={`/cerveza-nueva`}>
            <h2>New Beer</h2>
            <img className='img-home'src={image2} alt='new-beer'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie justo ut egestas suscipit. Sed ullamcorper pretium neque blandit ullamcorper. Maecenas turpis tellus, ullamcorper vel luctus nec, dapibus in libero.</p>
        </Link>
        </Container>
    )
}