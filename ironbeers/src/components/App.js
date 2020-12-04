import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './Navbar'
import Beers from './pages/beers-list/Beers-list'
import BeerDetails from './pages/beer-details/Beer-details'
import RandomBeer from './pages/random/Random-beer'
import BeerForm from './pages/form/New-beer'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact render={() => <Home />} />
        <Route path='/beers' render={() => <Beers />} />
        <Route path='/details/:id' render={props => <BeerDetails {...props} />} />
        <Route path='/random-beer' render={() => <RandomBeer />} />
        <Route path='/new-beer' render={() => <BeerForm />}  />
      </Switch>
    </>
  );
}

export default App;
