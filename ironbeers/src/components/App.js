import './App.css';

import { Switch, Route } from 'react-router-dom'

import Header from './pages/Home-page/Header'
import Home from './pages/Home-page/Home-page'
import BeerList from './pages/Beers-list/Beers-list'
import BeerDetails from './pages/Beer-details/Beer-details'
import RandomBeer from './pages/Random-beer/Random-beer'
import BeerForm from './pages/Beer-form/Beer-form'

function App() {
  return (
    <>

      <Header />

      <Switch>

        <Route path="/" exact render={() => <Home />}/>
        <Route path="/beers" exact render={() => <BeerList />} />
        <Route path="/beers/:beer_id" exact render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" render={() => <RandomBeer />} />
        <Route path="/new-beer" render={() => <BeerForm />} />

      </Switch>


    </>
  );
}

export default App;
