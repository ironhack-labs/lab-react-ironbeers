import Index from './components/Index/index';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import BeerList from './components/beerList/beerList'
import Beer from './components/beerList/BeerDetails'
import Random from './components/beerList/barRandom'
import Form from './components/beerList/form'
import './App.css';
import Nav from './components/Index/nav'

function App() {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact render={() => <Index />} />
        {/* <Route path="/montañas/:coaster_id" render={props => <CoasterDetails {...props} />} />
        <Route path="/crear" render={() => <CoasterForm />} /> */}
        <Route path="/beers" exact render={() => <BeerList/>} />
        <Route path="/random" exact render={(props) => <Random {...props} />} />
        <Route path="/new" exact render={() => <Form/>} />
        <Route path="/:id" exact render={(props) => <Beer {...props}/>} />


      </Switch>
</>
  );
}

export default App;
