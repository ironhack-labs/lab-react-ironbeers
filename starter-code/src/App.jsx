import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/home/home';
import { Beers } from './components/beers/beers';
import { BeerDetails } from './components/beer-details/beer-details';
import { NewBeer } from './components/new-beer/new-beer';
import { Header } from './components/header/header';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/'} render={() =>
                <Redirect to={'/home'}/>
            }/>
            <Route exact path={'/home'} render={() => <Home/>}/>
            <Route exact path={'/beers'} render={() => <Beers/>}/>
            <Route exact path={'/beers/:beerId'} render={() => <BeerDetails/>}/>
            <Route exact path={'/random-beer'} render={() => <BeerDetails/>}/>
            <Route exact path={'/new-beer'} render={() => <NewBeer/>}/>
        </Switch>
    )
};

export const App = () =>  {
    return (
      <div>
          <Header/>
          <Routes/>
      </div>
    );
};

