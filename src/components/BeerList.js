import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BeerList() {
  const [beers, updateBeers] = useState([]);

  useEffect(async () => {
    let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    //console.log(response)
  }, []);

  /* in classes: 
        async componentDidMount(){
        let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        this.setState({
        beerList : response.data.result

        })  */

  //Showing a loading screen...
  const { beerList } = this.state.beerList;
  if (beerList.length == 0) {
    return <p>Beers are loooaaaa-ding...</p>;
  }

  return (
    <div>
      <Header />

      {beers.map((beer, i) => {
        return (
          <Link to="/:beerId">
            <div key={i}>
              <img src={beer.image_url}></img>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default BeerList;
