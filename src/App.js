/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, Router } from 'react-router-dom'

import NavBar from './components/NavBar';

import axios from 'axios'
import BeerCard from './components/BeerCard';
import Beer from './components/Beer'

function App() {
  const [beers, setBeers] = useState({ beersFromAPI: [] })
  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        'https://ih-beers-api2.herokuapp.com/beers'
      )
      setBeers({ beersFromAPI: result.data })
    }
    fetchData()

  }, [])
  console.log('API ', beers)
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/beers'>
          {beers.beersFromAPI.map(beer =>
            <Link to={`/beers/${beer._id}`} >
              <div className='BeerCard' key={beer._id}>
                <div>
                  <img src={beer.image_url} alt={beer._id} />
                </div>
                <section>
                  <h1>{beer.name}</h1>
                  <h2>{beer.tagline}</h2>
                  <h5><strong>Created by: </strong> {beer.contributed_by}</h5>
                </section>
              </div>
            </Link>
          )}
        </Route>
        <Route
          exact path='/beers/:id'
          component={props => <Beer {...props} beers={beers.beersFromAPI} />}
        />

      </Switch>



    </div>
  );
}

export default App;
