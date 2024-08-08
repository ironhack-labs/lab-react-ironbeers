import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'


function HomePage() {


return(
    <div>
        <img src='/src/assets/beers.png' alt='All Beers' />
        <h3><Link to ={`/beers`}>All Beers</Link></h3>
        <p className='word-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit Enim aliquid iste dolores fugiat veniam ea tenetur adipisci, incidunt commodi dignissimos quis consequatur nobis! Atque delectus iste doloribus deserunt ipsam ex!</p>
        <img src='/src/assets/random-beer.png' alt='Random Beer' />
        <h3><Link to ={`/random-beer`}>Random Beer</Link></h3>
        <p className='word-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit Enim aliquid iste dolores fugiat veniam ea tenetur adipisci, incidunt commodi dignissimos quis consequatur nobis! Atque delectus iste doloribus deserunt ipsam ex!</p>
        <img src='/src/assets/new-beer.png' alt='New Beer' />
        <h3><Link to ={`/new-beer`}>New Beer</Link></h3>
        <p className='word-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit Enim aliquid iste dolores fugiat veniam ea tenetur adipisci, incidunt commodi dignissimos quis consequatur nobis! Atque delectus iste doloribus deserunt ipsam ex!</p>

    </div>
)
}

export default HomePage;
