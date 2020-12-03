import 'bootstrap/dist/css/bootstrap.min.css'
import BeersList from './beers-list/BeersList'
import BeerDetail from './beer-detail/Beer-detail'
import RandomBeer from './random-beer/RandomBeer'
import Homepage from './homepage/homepage'
import Header from './header/header'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Route path='/beers' exact render={() => <BeersList />} />
      <Route path='/beers/:id' render={props => <BeerDetail {...props} />} />
      <Route path='/random' render={() => <RandomBeer />} />

    </>

  );
}

export default App;
