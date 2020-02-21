import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import axios from './node_modules/axios'
//import Card from '../../components/Card'



class Home extends Component {
state = {
    nombre: '',
    description: '',
    image_url: ''
}



render(){
    return(
        <>
        < Link to={'/Beers'}>
        <div className='allBeers'>
       <img src='./images/beers.png'></img>
       <h1>All beers</h1>
       <p>Lorem Ipsum jkngkdfnvknfndknvdknkdjnvfdvdvdinvfdivkjdnfvkdjnvidnvidnj</p>
        </div>
        </Link>

        <div className='newBeer'>
       <img src='./images/new-beer.png'></img>
       <h1>Random Beer</h1>
       <p>Lorem Ipsum jkngkdfnvknfndknvdknkdjnvfdvdvdinvfdivkjdnfvkdjnvidnvidnj</p>
        </div>

        <div className='randomBeer'>
       <img src='./images/random-beer.png'></img>
       <h1>New Beer</h1>
       <p>Lorem Ipsum jkngkdfnvknfndknvdknkdjnvfdvdvdinvfdivkjdnfvkdjnvidnvidnj</p>
        </div>
        </>
    )
}
}

export default Home