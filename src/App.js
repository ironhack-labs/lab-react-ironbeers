import { Switch, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AllBeers from './Components/AllBeers'
import BeerDetails from './Components/BeerDetails'
import RandomBeer from './Components/RandomBeer'
import BeerForm from './Components/BeerForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={AllBeers} />
        <Route 
              exact path='/beers/:id'
              component={BeerDetails} 
            />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={BeerForm}/>
      </Switch>
    </div>
  );
}

export default App;
