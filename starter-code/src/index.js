import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import Beers from './Beers';
import Random from './Random'
import Add from './Add'
import Single from './Single'
import './App.css';

const router = (
  
    <Router>
    <div className="container-fluid"></div>
    <nav class="navbar navbar-light bg-light">
    
  <a className="mx-auto" href="/">

  <svg class="bi bi-house-door-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
</svg>
  </a>
  
  </nav>

       <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/add" >
            <Add />
          </Route>
          <Route path="/random">
            <Random />
          </Route>
          <Route path="/beer/:id">
            <Single />
          </Route>
        </Switch>
        
      </Router>
)


ReactDOM.render
    (router, 
document.getElementById('root'));
registerServiceWorker();
