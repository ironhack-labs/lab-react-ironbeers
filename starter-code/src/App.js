import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavBar from './Components/navbar';
import Beers from './Components/beers';
import Random from './Components/randomBeer';
import Details from './Components/beerDetaills';
import NewBeer from './Components/newBeer';
import SearchBar from './Components/searchBar';



class App extends Component {

  state = {
    beers: [],
    clone: [],
    url: 'https://ih-beer-api.herokuapp.com/beers',
    randomBeer: [],
    recentlyCreateBeer: "",
    name: "",
    tagline: "",
    firstBrewed: "",
    tips: "",
    attenuation: "",
    contributor: "",
    description: "",
    query: ""
  }


  async componentDidMount() {
    await this.getBeers()
    await this.getRandom()
  }


  getBeers = async () => {
    const { url } = this.state
    return await axios.get(url)
      .then(response => {
        let beers = response.data.slice(5180)
        this.setState({
          beers: beers,
          clone: beers
        })
      })
  }

  getRandom = async () => {
    return await axios.get('https://ih-beer-api.herokuapp.com/beers/random')
      .then(response => {
        this.setState({
          randomBeer: response.data
        })
      })
  }

  createNewBeer = (e) => {
    e.preventDefault()


    let newBeer = {
      name: this.state.name,
      tagline: this.state.tagline,
      firstBrewed: this.state.firstBrewed,
      description: this.state.description,
      tips: this.state.tips,
      attenuation: this.state.attenuation,
      contributor: this.state.contributor
    }



    axios.post(`${this.state.url}/new`, newBeer)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    this.setState({
      name: "",
      tagline: "",
      firstBrewed: "",
      description: "",
      tips: "",
      attenuation: "",
      contributor: "",
      recentlyCreateBeer: newBeer
    })

  }

  handleNewBeer = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }


  handleQuery = async (query) => {
    await axios.get(`${this.state.url}/search?q=${query}`)
      .then(res => {
        const filtered = res.data.slice(1, 100)
        !filtered ? this.setState({ beers: this.state.clone }) : this.setState({ beers: filtered })
      })

    this.setState({
      query: query
    })
  }


  render() {
    return (
      <div className="App">
        <h3>Home Of Beers</h3>
        <NavBar />

        <SearchBar
          query={this.state.query}
          onQuery={this.handleQuery}
        />

        <Switch>
          <Route
            exact path='/allbeers' render={(props) => <Beers  {...props} beers={this.state.beers} />} />

          <Route exact path="/random"
            render={(props) => <Random  {...props}
              beer={this.state.randomBeer} />}
          />
          <Route path="/item/:id" render={(props) => <Details {...props} beers={this.state.beers} />} />

          <Route path="/new" render={(props) =>
            <NewBeer  {...props}
              newBeer={this.state}
              onCreateNewBeer={this.createNewBeer}
              onHandleNewBeer={this.handleNewBeer}

            />} />

        </Switch>


      </div >
    );
  }
}

export default App;
