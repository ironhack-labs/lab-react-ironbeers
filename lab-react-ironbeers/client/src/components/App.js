import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import BeerDetails from './pages/BeerDetails/Beer-Details'
import BeerRandom from './pages/Beer-Random/Beer-Random'
import BeerForm from './pages/Beer-form/Beer-form'
import BeerList from './../components/pages/Beer-list/Beer-list'

function App() {
  return (

    <>
    <Switch>
      <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" exact render={() => <BeerList />} />
        <Route path="/beer/:beer_id" render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" render={props => <BeerRandom {...props} />} />
        <Route path="/new/" exact render={() => <BeerForm />} />
        
      </Switch>
    </>
  );
}

export default App;
