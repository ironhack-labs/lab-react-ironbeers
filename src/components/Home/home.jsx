import React, { Component } from 'react';
import { Link } from "react-router-dom";


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            randomId: 0
        }
    }



 randomId = () =>{
   
 }

  render() {
    return (
      <div className="App">
          <h1>HOME</h1>
          <Link to={`/all-beers`}><p>All Beers</p></Link>
          <Link to={`/viewBeer/${0}/${0}`}><p>Random Beer</p></Link>
          <Link to={`/new-beer`}><p>New beer</p></Link>
      </div>
    );
  }
}

export default App;
