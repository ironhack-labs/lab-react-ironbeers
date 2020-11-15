import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'

class App extends Component {
  state =
  { beers }
  
  componentDidMount = async () => {
    const beers = await axios.get("https://api.punkapi.com/v2/")
    this.setState({ beers: beers.data})
    console.log(beers.data)
  }
  render() {
    // L18 definimos ruta para cuando se acceda a una ruta determinada se reenderice un countrydetails de esa informacion.
  return (
    <div className="App">
     <Navbar />
     <div className="container">
          <div className="row">
    
     </div>
     <Switch>
     
     </Switch>
    </div> 
    </div>
    
  );

}
}
export default App;