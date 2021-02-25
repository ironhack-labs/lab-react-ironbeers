import { Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/Index/Index';
import BeersList from '../pages/beers/BeersList';
import BeerDetails from '../pages/beers/BeerDetails';

import NewBeer from '../pages/beers/NewBeer';

const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => <IndexPage />}></Route>
    <Route path="/beers" exact render={() => <BeersList />}></Route>
    <Route
      path="/beers/:id"
      render={(props) => <BeerDetails id={props.match.params.id} />}
    />
    <Route path="/random-beer" render={() => <BeerDetails />}></Route>
    <Route path="/new-beer" render={() => <NewBeer />}></Route>
  </Switch>
);
export default Routes;
