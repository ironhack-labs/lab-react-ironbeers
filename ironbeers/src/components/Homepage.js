import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'


const Home = () => {
    return (

        <div>

            <h1 className='home'>IRONBEERS</h1>
            <hr />

            <div className='home'>
                <section>
                    <img  className='home-img' src='./images/beer.jpg' alt='Beers close up' />
                    <Link to='beers'><h2>All Beers</h2></Link>
                    <h3 className='text'>"Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</h3>
                </section>
                <section>
                    <img className='home-img' src='./images/beer2.jpg' alt='grifos de cervezas 1' />
                    <Link to='random-beer'><h2>Random Beer</h2></Link>
                    <h3 className='text'>"Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</h3>
                </section>
                <section>
                    <img className='home-img' src='./images/beer4.jpg' alt='grifos de cervezas 2' />
                    <Link to='new-beer'><h2>New Beer</h2></Link>
                    <h3 className='text'>"Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</h3>
                </section>

            </div>

        </div>
    )
}


export default Home