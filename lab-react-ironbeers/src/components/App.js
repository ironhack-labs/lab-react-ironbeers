import './App.css';
import Home from './../pages/home/Home'
import Header from './header/Header'
import BeerList from './../pages/beers/BeerList'
import { Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <> 
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Home />} /> 
        <Route path='/BeerList' render={() => <BeerList />} /> 
      </Switch>
    </>
  );
}

export default App;
