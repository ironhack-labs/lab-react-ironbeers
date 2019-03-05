import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Beers from './components/Beers';
import NewBeers from './components/NewBeers';
import Home from './components/Home';
import BeerDetail from './components/services/BeerDetail';
import axios from 'axios';

class App extends Component {

  state = {
    isHome: true,
    beers: [],
    search: []
  }
  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(response => {
        this.setState({beers: response.data})
    })
}
  showHome = () => this.setState({ isHome: false })
  hideHome = () => this.setState({ isHome: true })

  onSearch = (search) => this.setState({ search });

  render() {

    const BeerDetails = (props) => {
      const beer = this.state.beers.find(beer => String(beer.name) === props.match.params.name)
      return <BeerDetail { ...beer} />
    }


    const RandomBeers = (props) => {
      const randBeer = this.state.beers[Math.floor(Math.random() * this.state.beers.length)];
      return <BeerDetail { ...randBeer} />
      
    }


    const { isHome } = this.state
    return (
      <div className="App ">
        <Navbar isHome={isHome} hideHome={this.hideHome}/>
        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path='/home' 
                component={() => <Home toggleHome={this.showHome} />}
                search={this.state.search} 
                onSearch={this.onSearch}
                />
              <Route exact path='/beers' component={Beers}/>
              <Route exact path='/beers/:name' component={BeerDetails}/>
              <Route path='/new-beers' component={NewBeers}/>
              <Route path='/random-beers/:name' component={RandomBeers}/>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;