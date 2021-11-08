
import React, {Component} from 'react';
import './App.css';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Homepage from './components/Homepage';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      beers: []
    }
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
        });
        console.log("getting info from the API", response.data)
      })
      .catch((e) => {
        console.log('error getting beers from API', e);
      });
  }


  render(){
    return(

      <div>
        {/* <Navbar/> */}
         
        <Switch>
        <Route exact path="/" component={Homepage} />
          <Route exact path="/beers">
          <Beers {this.state.beers}/>
          </Route>
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/random-beer" component={RandomBeer} />
        </Switch>
      </div>
    )
  }
}

export default App;
