import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import './Home.css'

//images
import beerListImage from './img/beersList.jpeg'
import beerRandom from './img/random.jpg'
import beerNew from './img/newBeer.jpg'

import BeersList from '../beers/Beers'



const Home = () =>{

    return(

        <Container>
            <div className="home-box">
                <div className="home-sections">
                    <Link to="/beers">
                        <img src={beerListImage} alt="list of beers" />
                    </Link>
                    <h2>All Beers</h2>
                    <p>Al ataquerl fistro apetecan papaar papaar apetecan va usté muy cargadoo de 
                    la pradera. Papaar papaar torpedo tiene musho peligro tiene musho peligro ese 
                    que llega apetecan fistro quietooor. Hasta luego Lucas jarl pecador.</p>
                </div>
            
                <div className="home-sections">
                    <Link to="/random">
                        <img src={beerRandom} alt="random beer" />
                    </Link>    
                    <h2>Random Beer</h2>
                    <p>Lorem fistrum torpedo va usté muy cargadoo ese pedazo de por la gloria de mi 
                    madre amatomaa. Ese hombree va usté muy cargadoo fistro te voy a borrar el cerito 
                    diodeno no puedor benemeritaar torpedo jarl. Mamaar no te digo trigo por no.</p>
                </div>
            
                <div className="home-sections">
                    <Link to="/newbeer">
                        <img src={beerNew} alt="new beer" />
                    </Link>    
                    <h2>New Beer</h2>
                    <p>No puedor te voy a borrar el cerito torpedo diodenoo pecador la caidita amatomaa 
                    tiene musho peligro caballo blanco caballo negroorl por la gloria de mi madre. 
                    Te voy a borrar el cerito está la cosa muy malar ahorarr benemeritaar ese pedazo de.</p>
                </div>
            </div>
            
            <BeersList />
            
        </Container>

    )

}

export default Home