import React from 'react';
import './App.css';
import './index.css';
import BeerList from './components/BeerList';
import { BrowserRouter as Router, Link, Switch, Route, useParams} from 'react-router-dom';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <div className='homepage'>
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/beers" className='link-test btn-grad'>Beers</Link>
            </li>
            <li>
              <Link to="/random-beer" className='link-test btn-grad'>Random</Link>
            </li>
            <li>
              <Link to="/new-beer" className='link-test btn-grad'>New Beer</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path='/' exact >
            <Home />
          </Route>
          <Route path="/beers" exact>
           <BeerList/>
          </Route>
          <Route path="/random-beer" exact>
            <RandomBeer />
          </Route>
          <Route path="/new-beer" exact>
          <CreateBeer />
          </Route>
          <Route path='/details/:id' exact >
              <BeerDetails />
            </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </div>
  );
}

export default App;
