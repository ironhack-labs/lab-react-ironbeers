import React, { Component } from 'react';
import './App.css';
import Beers from "./components/Beers"
import axios from "axios";
import {Link, Route} from "react-router-dom";
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      // beers=[]
    }
  }
  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response =>{
      this.setState({beers:response.data})
    })
  }
  render() {
    return (
      <div className="App">
      
          <Route exact path="/" component={Beers}></Route>
 
      </div>
    );
  }
}

export default App;

//npm install axios react-router-dom query string bulma font-awesome bulma-helpers --s