import React from 'react';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Homepage from './components/Homepage';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import axios from "axios";
import BeerDetails from './components/BeerDetails';

class App extends React.Component {

  constructor(props) {
    super (props)
    this.state = {
      beersArr : []
    }
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((beersFromApi) => {
        this.setState({
          beersArr: beersFromApi.data
        });
        console.log("number of beers", beersFromApi.data)
      })

      .catch((error) => {
        console.log('error getting beers', error);
      });
  }



  render(){
      return (

              <div className="App">
                
                <Switch>
                  <Route exact path="/">
                    <Homepage/>
                  </Route> 

                  <Route exact path="/beers">
                    <Header/>
                    <AllBeers allBeers={this.state.beersArr}/>
                  </Route> 


                   <Route path="/beers/:beerId" render= {(props)=>{
                     const beerToDisplay = this.state.beersArr.find((beer) => {
                       return beer._id === props.match.params.beerId
                     })
                     
                     return (
                       <>
                      <Header/> 
                      <BeerDetails {...beerToDisplay} />
                     </>
                     )}}/>
                      
                    )
                      
                  <Route exact path="/new-beer">
                    <Header/>
                    <NewBeer/>
                  </Route> 

                   <Route exact path="/random-beer">
                    <Header/>
                    <RandomBeer/>
                  </Route>   
                            
                </Switch>
                         
              </div>
      )
  }

  }
 

export default App;
