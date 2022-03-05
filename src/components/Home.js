import './Home.css';
import { useEffect, useState } from "react";
import axios from 'axios';

import allBeersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function App() {

  const [selectedBeers, setSelectedBeers] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        console.log(result.data);
        setSelectedBeers(result.data);
      })
      .catch();
  }, []);

  return (
    <div className="App">

      <paragraph>
          <br></br>
          
          <a href="/AllBeers">
            <img src={allBeersImage} alt="AllBeers" className="m-5"/>

            <h1 className="m-5">All Beers</h1>

            <div className="container">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
          </a>

          <a href="/RandomBeer">
            <img src={randomBeerImage} alt="RandomBeer" className="m-5"/>
            <h1 className="m-5">Random Beer</h1>

            <div className="container">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
          </a>

          <a href="/NewBeer">
            <img src={newBeerImage} alt="NewBeer" className="m-5"/>
            <h1 className="m-5">New Beer</h1>

            <div className="container">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
          </a>
          <br></br><br></br><br></br><br></br><br></br><br></br>
        </paragraph>
    </div>
  );
}

export default App;
