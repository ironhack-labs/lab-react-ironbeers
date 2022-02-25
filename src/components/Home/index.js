import { Link } from 'react-router-dom'
import beer from '../../assets/beers.png';
import newbeer from '../../assets/new-beer.png';
import randombeer from '../../assets/random-beer.png'
import React from 'react';
import './styleHome.css'

const Home = () =>{
    return(
        <div className="Home">
            <div className='CardHome'>
                <Link to="../Beers" style={{ textDecoration: 'none' }}>
                    <img alt='icon-beers' src={beer}/>
                    <div className='CardHomeInfo'>
                        <h1>Beers</h1>
                        <p>Description:
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </Link>
            </div>

            <div className='CardHome'>
                <Link to="../RandomBeer" style={{ textDecoration: 'none' }}>
                    <img alt='icon-random' src={randombeer}/>
                    <div className='CardHomeInfo'>
                        <h1>Random Beers</h1>
                        <p>Description:
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </Link>
            </div>

            <div className='CardHome'>
                <Link to="../NewBeer" style={{ textDecoration: 'none' }}>
                    <img alt='icon-new' src={newbeer}/>
                    <div className='CardHomeInfo'>
                        <h1>New Beer</h1>
                        <p>Description:
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </Link>
            </div>

        </div>
    )
};

export default Home;