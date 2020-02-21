import React from 'react'
import { Link } from 'react-router-dom'
import DisplayCard from '../components/DisplayCard'

const Home = () => {
    return (
        <>
        <Link to={'/allbeers'}>
            <DisplayCard 
                image={'/images/beers.png'}
                title='All beers'
                paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'/>
        </Link>
        <Link to={'/randombeer'}>
            <DisplayCard 
                image={'/images/random-beer.png'}
                title='Random Beer'
                paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'/>
        </Link>
        <Link to={'/newbeer'}>
            <DisplayCard 
                image={'/images/new-beer.png'}
                title='New Beer'
                paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'/>
        </Link>
        </>
    )
}

export default Home