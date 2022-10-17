import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'


const Home = () => {
  return (
    <Container>
        <section className='all'>
            <div className='container'>
                <img src="/assets/beers.png" alt="beers" />
            </div>
            
            <div>
                <Link to='/beers' className='links'><h1>All Beers</h1></Link>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Laudantium tenetur unde placeat voluptates, nostrum optio maxime.
                </p>
            </div>

        </section>
        <section className='all'>
            <div className='container'>
                <img src="/assets/random-beer.png" alt="beers" />
            </div>
            
            <div>
                <Link to='/random' className='links'><h1>Random Beer</h1></Link>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Laudantium tenetur unde placeat voluptates, nostrum optio maxime.
                </p>
            </div>
        </section>
        <section className='all'>
            <div className='container'>
                <img src="/assets/new-beer.png" alt="beers" width="100%"/>
            </div>
            
            <div>
                <Link to='/new-beer' className='links'><h1>New Beer</h1></Link>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Laudantium tenetur unde placeat voluptates, nostrum optio maxime.
                </p>
            </div>
        </section>
        
    </Container>
  )
}

export default Home