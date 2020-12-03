import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import BeerList from './Beers/BeersList'
import BeerDetails from './Beers/BeerDetails'
import BeerRandom from './Beers/BeerRandom'
import NewBeer from './Beers/NewBeer'

function App() {
  return (
    <>
      <main>
      
      </main>
      <Switch>
        <Route path='/' exact render={() => <Home />} />
        <Route path='/beers' exact render={() => <BeerList />} />
        <Route path='/beers/:beer_id' render={props => <BeerDetails {...props} />} />
        <Route path='/random-beer' render={props => <BeerRandom {...props} />} />
        <Route path='/new-beer' render={() => <NewBeer />} />
      </Switch>
    </>
  );
}

export default App;
