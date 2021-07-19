import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'; //only here, where routes are created!!!

//import all components here:
import Home from './components/Home';
import Header from './components/Header';
import BeerDetail from './components/BeerDetail';
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import AddForm from './components/AddForm';

function App() {
  //handle routes in App.js


  handleAddTodo = (event) => {

    event.preventDefault()

    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.brewed.value,
      brewers_tips: event.target.tips.value,
      attenuation_level: event.target.attenuation.value,
      contributed_by: event.target.contributed.value,
      completed: false
    }
    
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {

          this.setState({
            todos: [response.data, beers]
          }, () => {
              
              this.props.history.push('/')
          })
      })
      .catch(() => {
        console.log('Adding beer failed! :( ')
      })

  }


  return (
    <div>
      <Home />

      <Switch>
        <Route exact path={'/'} component={BeerList}></Route>
        <Route path={'/random'} component={RandomBeer}></Route>
        <Route path={'/:id'} component={BeerDetail}></Route>
        <Route path={'/new'} render = {()=> {
         return <AddForm  {...routeProps} onAddBeer= {handleAddBeer} />
        }}
        
      </Switch/
    </div>
  );
}

export default withRouter(App);

ReactDOM.render(<App />, document.querySelector('#root'));
