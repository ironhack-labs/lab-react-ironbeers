import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/beers" exact>
          <Header />
          <BeersList />
        </Route>
        <Route path="/beers/:beerId" exact>
          <Header />
          <BeerDetails />
        </Route>
        <Route path="/random-beer">
          <Header />
          <RandomBeer />
        </Route>
        <Route path="/new-beer">
          <Header />
          <NewBeer />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
