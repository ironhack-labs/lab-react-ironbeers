import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Home() {
  return <h2>Home</h2>;
}

function Beers() {
  return <h2>Beers</h2>;
}

function RandomBeer() {
  return <h2>RandomBeer</h2>;
}

function NewBeer() {
  return <h2>NewBeer</h2>;
}
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/beers">beers</Link>
            </li>
            <li>
              <Link to="/random-beer">random-beer</Link>
            </li>
            <li>
              <Link to="/new-beer">new-beer</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/random-beer">
            <RandomBeer />
          </Route>
          <Route path="/new-beer">
            <NewBeer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
