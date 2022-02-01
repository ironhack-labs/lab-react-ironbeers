import './App.css';
//import { Link } from "react-router-dom"
import Beers from './components/listBeers'
import HomeBeer from './components/home'
import { Route, Switch, Redirect } from 'react-router-dom';
import BeerInfo from './components/singleBeer'

const Header = () => {
  return(
    <div>
  <h1>Home</h1>
  </div>
  )}
function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomeBeer />
        </Route>
        <Route path="/beers" exact>
          <Header />
          <Beers />
        </Route>
        <Route path="/beerInfo" exact >
          <BeerInfo />
        </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
