import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from './Homepage';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer'; 
import BeerDetail from './BeerDetail';


function App() {

  //Class:
  // componentDidMount() -- quando o component é webkitConvertPointFromPageToNode
  // componentDidUpdate() -- sempre atualiza
  // componentWillUnmout() -- qdo o components é deletado

  //Hook:
  //useEffect(() => {callback}, [var])


// /beer-detail/:id

  return (
    <div> 
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
        <Route exact path='/beer-detail/:id' component={BeerDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;

