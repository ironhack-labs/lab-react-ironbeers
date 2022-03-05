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
      <header className="App-header">
      </header>
      <paragraph>
          <br></br>
          
          <a href="/allBeers">
            <img src={allBeersImage} alt="AllBeers" />

            <h1>All Beers</h1>

            <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </a>

          <a href="/randomBeer">
            <img src={randomBeerImage} alt="RandomBeer" />
            <h1>Random Beer</h1>

            <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </a>

          <a href="/newBeer">
            <img src={newBeerImage} alt="NewBeer" />
            <h1>New Beer</h1>

            <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </a>
        </paragraph>
    </div>
  );
}

export default App;
