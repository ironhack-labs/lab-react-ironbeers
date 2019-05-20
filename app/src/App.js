import React,{Component} from 'react';
import './App.css';
import Router from './Router';
import NavBar from './components/NavBar';

class App extends Component{


  render(){
      return(
          <div className="App">

          <NavBar/>

          <div className="uk-section">
              <Router 
              />
          </div>

          </div>
      )
  }
}

export default App;
