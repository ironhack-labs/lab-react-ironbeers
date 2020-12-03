import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Navbar from './Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import BeerList from './../components/pages/Beers-list/Beers'
import BeerDetails from './../components/pages/Beers-details/Beer-details'
import BeerRandom from './../components/pages/Beers-random/BeerRandom'
import BeerForm from './../components/pages/Beerform/Beerform'


function App() {

  return (
    <>
      <Navbar />
        <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" exact render={() => <BeerList />} />
        <Route path="/beers/:id" exact render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" render={() => <BeerRandom />} />
        <Route path="/new" render={() => <BeerForm />} />
          
      </Switch>
    </>
  )
}

export default App