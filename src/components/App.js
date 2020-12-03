import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AllBeers from './AllBeers';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import BeerForm from './BeerForm';

function App() {
  return (
    <Switch>
      <Route path='/' exact render={() => <Home />} />
      <Route path='/beers' exact render={() => <AllBeers />} />
      <Route path='/beers/:id' render={props => <BeerDetails {...props}/>} />
      <Route path='/random-beer' render={() => <RandomBeer />} />
      <Route path='/new-beer' render={() => <BeerForm />} />
      <AllBeers />
    </Switch>
  );
}

export default App;
