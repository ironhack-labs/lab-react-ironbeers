import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Beers from '../assets/beers.png'
import NewBeer from '../assets/new-beer.png'
import RandomBeer from '../assets/random-beer.png'

function Home() {
  return (
    <header className="Home">
        <Link to="/beers">
            <Card>
                <Card.Img variant="top" src={Beers} />
                <Card.Body>
                <Card.Text>
                    <span className="title">All beers</span><br />
                    Lorem fistrum está la cosa muy malar ad pecador ex commodo ex llevame al sircoo torpedo pecador exercitation. Consectetur pupita qué dise usteer jarl aliqua ut diodeno por la gloria de mi madre ut. 
                </Card.Text>
                </Card.Body>
            </Card>
        </Link>
        <Link to="/random-beer">
            <Card>
                <Card.Img variant="top" src={NewBeer} />
                <Card.Body>
                <Card.Text>
                    <span className="title">Random beer</span><br />
                    Hasta luego Lucas amatomaa enim a wan apetecan laboris occaecat exercitation no te digo trigo por no llamarte Rodrigor. Diodenoo cillum papaar papaar dolore torpedo te voy a borrar el cerito irure irure hasta luego Lucas tempor. Cillum adipisicing et ese hombree ad me cago en tus muelas reprehenderit tempor ullamco.
                </Card.Text>
                </Card.Body>
            </Card>
        </Link>
        <Link to="/new-beer">
            <Card>
                <Card.Img variant="top" src={RandomBeer} />
                <Card.Body>
                <Card.Text>
                    <span className="title">New beer</span><br />
                    Laboris te voy a borrar el cerito pecador te voy a borrar el cerito amatomaa papaar papaar benemeritaar tiene musho peligro te va a hasé pupitaa ese que llega esse. Sexuarl mamaar te voy a borrar el cerito reprehenderit jarl de la pradera quis laboris fistro.
                </Card.Text>
                </Card.Body>
            </Card>
        </Link>
      </header>
  );
}

export default Home;

