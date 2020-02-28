import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Home from "./components/Home";
import NewBeer from './components/newBeer';
import Beers from "./components/beers.js";
import RandomBeer from "./components/randomBeer.js";
import { Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";


class App extends Component {
  
  constructor(){
      super();
      this.state = { 
allbeers:[]
      }
  }



getAllBeers = () =>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(responseFromApi => {
      this.setState({
        allBeers: responseFromApi.data
      })
    })
  }

//   componentDidMount() {
//     this.getAllBeers();
    
//   }

//   render(){
//     return(
//       <div>
//         <div style={{width: '60%', float:"left"}}>
//           { this.state.allBeers.map( beer => {
//             return (
//               <div key={beer._id}>
//                 <Link to={`/beer/${beer._id}`}>
//                   <h3>{beer.title}</h3>
//                 </Link>
              
//               </div>
//             )})
//           }
//         </div>
//         <div style={{width: '40%', float:"right"}}>
//             <Beers getData={() => this.getAllBeers()}/>
//         </div>
//       </div>
//     )
//   }
// }





  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path="/"
      render={() => {
        return(
       <Home></Home>
       );
       }}
       />
       <Route exact path="/beers"
      // render={() => {
      //   return(
      //  <Beers></Beers>
      //  );
      //  }}
      component={Beers}
       />

       


       {/* <Route exact path="/beers"render={props => {
                 {this.state.allBeers.map(beer => beer.id === props.match.params.id)

              return (
                 <Beers allBeers={allBeers}></Beers>
                );
            >  }}
           /></Route>
   */}




    <Route exact path="/randomBeer"
      render={() => {
        return(
       <RandomBeer></RandomBeer>
       );
       }}
       />

       <Route exact path="/newBeer"
      render={() => {
        return(
       <NewBeer></NewBeer>
       );
       }}
       />


            
       
        
        </Switch>
      </div>
    );
  }
}


export default App;
