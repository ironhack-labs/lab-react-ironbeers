import React from 'react';

import { Switch, Route } from 'react-router-dom';

import IndexPage from './../Layout/IndexPage'
import BeersList from './../Pages/BeersList';
import BeerDetails from './../Pages/BeerDetails';
import NewBeerForm from './../Pages/NewBeerForm';

import BeersService from './../../Service/beers.service';

const Routes = () => {

  const getRandomBeerId = () => {
    let idsArray = []
    let randomId = ''
    const beersService = new BeersService();
    beersService
      .getAllBeers()
      .then((response) => {
        idsArray = response.data.map(elm => elm._id)
        randomId = idsArray[Math.floor(Math.random() * idsArray.length)]
        return randomId
      })
      .catch((err) => console.log('API GET ERROR:', err))
  }

  return (
    <Switch>
      <Route path="/" exact render={() => <IndexPage />} />
      <Route path="/beers" exact render={() => <BeersList />} />
      <Route path="/beers/:beerId" render={props => <BeerDetails {...props} isDirect="false"/>} />
      <Route path="/random-beer" render={() => <BeerDetails beerId={getRandomBeerId()} isDirect="true"/>} />
      <Route path="/new-beer" render={() => <NewBeerForm />} />
    </Switch>
  )
}

export default Routes;
