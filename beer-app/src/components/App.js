import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './home/Home';
import BeersList from './beerslist/BeersList';
import BeerDetails from './beerdetails/BeerDetails';
import RandomBeer from './randombeer/RandomBeer';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" exact render={() => <BeersList />} />
        <Route path="/beers/:beer_id" exact render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" exact render={props => <RandomBeer {...props} />} />
      </Switch>
    </>
  );
}

export default App;
