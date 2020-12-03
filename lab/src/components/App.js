import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./pages/Home"
import BeersList from "./pages/Beers-list/Beers-List"
import BeerDetails from "./pages/Beer-details/Beer-details"
import RandomBeer from "./pages/Random-beer/Random-beer"
import BeerForm from "./pages/Beer-form/New-beer"

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>   
        <Switch>
          <Route path="/" exact render={() => <Home />} />  
          <Route path='/beers' exact render={() => <BeersList />} />
          <Route path='/beers/:beer_id' render={props => <BeerDetails {...props} />} />
          <Route path='/random' render={props => <RandomBeer {...props} />} />
          <Route path='/new' render={() => <BeerForm />} />
        </Switch>
    </>
    
  );
}

export default App;
