
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import BeersList from './pages/BeersList/BeersList'
import BeerDetails from './pages/BeerDetails/BeerDetails'
import RandomBeer from './pages/RandomBeer/RandomBeer'

function App() {
  return (
    <>
       <Switch>
        
        <Route path='/' exact render={() => <Home />} />
        <Route path='/beers' render={() => <BeersList />} />
        <Route path="/beer/:beer_id" render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" render={props => <RandomBeer {...props} />} />

          
      </Switch>
      </>
  );
}

export default App;
