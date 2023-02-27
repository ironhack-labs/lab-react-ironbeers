import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Root from './pages/Root';
import Beers, { BeersLoader } from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails, { beerDetailsLoader } from './pages/BeerDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" component={BeerDetails} />
        <Route path="/newbeer" component={NewBeer} />
        <Route path="/random" component={RandomBeer} />
      </Switch>
    </Router>
  );
};

export default App;