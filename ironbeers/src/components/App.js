import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Switch, Route } from 'react-router-dom'
import Home from './home';
import AllBeers from './all-beers';
import BeerDetails from './beer-details';
import RandomBeer from './random-beer';
import NewBeer from './create-new-beer';

function App() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/beers" exact render={() => <AllBeers />} />
      <Route path="/beers/:id" render={props => <BeerDetails {...props} />} />
      <Route path="/random-beer" render={() => <RandomBeer />} />
      <Route path="/new-beer" render={() => <NewBeer />} />
    </Switch>
  );
}

export default App;