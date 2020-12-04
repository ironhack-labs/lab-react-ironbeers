import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './HomePage'
import { Switch, Route } from 'react-router-dom'
import BeersList from './BeersList'


function App() {
  return (
    <>
      <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="/cervezas" exact render={() => <BeersList />} />
      {/* <Route path="/montañas/:coaster_id" render={props => <CoasterDetails {...props} />} />
      <Route path="/crear" render={() => <CoasterForm />} /> */}
    </Switch>

    
    </>
  );
}

export default App;
