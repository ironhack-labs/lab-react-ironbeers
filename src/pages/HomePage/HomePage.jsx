import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import beersPic from '../../assets/beers.png'
import randomBeerPic from '../../assets/random-beer.png'
import newBeerPic from '../../assets/new-beer.png'
import HomeCard from '../../components/HomeCard/HomeCard'


const HomePage = () => {

    return (

        <>
            <Container className='mt-5 mb-5'>
                <Link to={'/beers'}>
                    <HomeCard img={beersPic} title={'Beers'} />
                </Link>
            </Container>

            <Container className='mt-5 mb-5'>
                <Link to={'/random-beer'}>
                    <HomeCard img={randomBeerPic} title={'Random Beer'} />
                </Link>
            </Container>


            <Container className='mt-5 mb-5'>
                <Link to={'/new-beer'}>
                    <HomeCard img={newBeerPic} title={'New Beer'} />
                </Link>
            </Container>
        </>



    )
}

export default HomePage