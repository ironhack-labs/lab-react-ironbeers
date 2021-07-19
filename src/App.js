import { Switch, Route, withRouter } from "react-router-dom"
import React, { Component } from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

import Header from './components/Header'
import Beers from "./components/Beers"
import NewBeer from "./components/NewBeer"
import SingleBeer from "./components/SingleBeer"
import RandomBeer from './components/RandomBeer'



class App extends Component {

  state = {
    beersData: []  //setting the state to start empty 
  }
  
  async componentDidMount(){
    try {
      let response = await Axios.get('https://ih-beers-api2.herokuapp.com/beers') // variable to set the response from the data base, waiting for the response
      console.log(response.data) // getting the beer list data from data base
      this.setState({
        beersData: response.data
      })
    }  
    catch(err){
      console.log('Beer List fetch failed', err)
    }
  }

  /*   also like this !!!! maybe 
componentDidMount() {
 let response =  Axios.get('https://ih-beers-api2.herokuapp.com/beers')
    console.log(response.data)
    .then((response) => {
     
      this.setState({
        beersData: response.data,
      });
    })
    .catch((err) => {
      console.log("something went wrong when getting the api", err);
    });
}
*/

handleAddBeer = (event) => {
  event.preventDefault();  // preventing the query thing that happens in the URL
  console.log(event.target);

  let newBeer = {
    name: event.target.name.value,
    tagline: event.target.tagline.value,
    description: event.target.description.value,
    first_brewed: event.target.first_brewed.value,
    brewers_tips: event.target.brewers_tips.value,
    attenuation_level: +event.target.attenuation_level.value,
    contributed_by: event.target.contributed_by.value,
  };

  Axios.
  post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
    .then((response) => {
      this.setState(
        {
          beersData: [response.data, ...this.state.beersData],
        },
        () => {
           <Redirect to={'/'} >
		}
        }
      );
    })
    .catch((error) => {
      console.log('Creating beer failed ' + `${error}`);
    });
};

handleFindBeer = (event) => {
  let FindBeer = event.target.value;

  Axios
    .post(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${FindBeer}`,
      FindBeer
    )
    .then((response) => {
      this.setState({
        beersData: FindBeer,
      });
    })
    .catch(() => {
      console.log('Unable to find beer');
    });
};


  render() {
    return (
      <div>
      <Header/>
      <Switch>        
        <Route exact path={'/'} render={() => {
          return <HomePage/>
        }}/>
        <Route exact path={'/Beers'} render={() => {
          return <BeersList beers={beers}/>
        }}/>
        <Route path={'/beers/:id'} render={(routerProps) => {
          return <BeerDetails {...routerProps} beers={beers}/>
        }}/>
        <Route path={'/RandomBeer'} render={() => {
          return <RandomBeer/>
        }}/>
        <Route path={'/NewBeer'} render={() => {
          return <NewBeer NewBeer={handleNewBeer}/>
        }}/>
      </Switch>
      </div>
    )
  }
}


export default withRouter(App)
