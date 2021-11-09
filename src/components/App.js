import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage'
import './App.css';
import ListBeers from './ListBeers'
import axios from 'axios';

class App extends React.Component {
  state ={
    beersArr: []
  }

  componentDidMount(){
    axios
     .get('https://ih-beers-api2.herokuapp.com/beers')
     .then((response)=>{
       this.setState({
         beersArr: response.data,
       })
     })
     .catch((error)=> console.log(error) )
  }

  render(){
    return (
      <div className="App">
       <Switch>
         <Route exact path="/">
            <Homepage/>
         </Route>

         <Route path="/beers">
            <ListBeers beers={this.state.beersArr}/>
         </Route>
       </Switch>
      </div>
    );
  }
  
}

export default App;
