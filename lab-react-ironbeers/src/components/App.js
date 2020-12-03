import React from 'react';

import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Beers from "./Beers";

function App() {
  return (
  
    <div className="rutes">
       <Switch>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/Beers" exact render={() => <Beers/>}></Route>
       </Switch>
    </div>
    



    
  );
}

export default App;
