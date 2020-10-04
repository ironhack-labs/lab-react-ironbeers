// import packages
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

// import CSS
import '../assets/styles/style.css';

// import Components
import Homepage from './Homepage';
import Beers from './Beers';
import SingleBeer from './SingleBeer'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'

function App() {
  // state and setState method
  const [beers, setBeers] = useState([]);

  // API url
  const BEER_API = 'https://ih-beers-api2.herokuapp.com/beers';

  // after page renders for the first time, update the state (beers)
  // with the response from the API 
  useEffect(() => {
    (async () => {
      let source = axios.CancelToken.source();
      try {
        const response = await axios.get(BEER_API, { cancelToken: source.token });
        setBeers(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('cancel caught!');
        } else {
          console.error(err)
        }
      }

      return () => {
        console.log('unmounting')
        source.cancel();
      };
    })();
  }, []);

  const addBeer = (res) => {
    console.log(res);
  }

  // renders the routes
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/beers' render={() => <Beers beers={beers} />} />
        <Route exact path='/beers/:beerId' render={() => {
          return <SingleBeer apiUrl={BEER_API} />;
        }}
        />
        <Route exact path='/random-beer' render={() => {
          return <RandomBeer apiUrl={BEER_API} />;
        }}
        />
        <Route exact path='/new-beer' render={() => {
          return <NewBeer addBeer={addBeer} />;
        }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
