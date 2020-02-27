import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home/Home.js';
import Nav from './Nav/Nav.js';
import ListOfBeers from './ListOfBeers/ListOfBeers.js'
import OneBeer from './OneBeer/OneBeer.js'
import axios from 'axios';


class App extends Component {

  state = { 
    listofBeers: [] 
}

  componentDidMount = () =>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(responseFromApi => {
      this.setState({
        listofBeers: responseFromApi.data 
      })
    })
  }

  render() {
    return (
    <div className="App">
      <div>
         <Nav></Nav>
      </div>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
              exact
              path="/Beers"
              render= {_=> {

                return (
                  <ListOfBeers beers={this.state.listofBeers}></ListOfBeers>
                );
              }}
            />
            <Route
              exact
              path="/Beers/:id"
              render={props => {
                let newList = [...this.state.listofBeers]
                newList = newList.filter(beer => beer._id === props.match.params.id )
                return (
                  <OneBeer beers={newList}></OneBeer>
                  );
                }}
            />
        </Switch>
    </div>

    );
  }
}

export default App;




