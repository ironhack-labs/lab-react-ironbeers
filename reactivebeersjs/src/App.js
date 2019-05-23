import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Main from "./components/Main.js";
import mainComponentData from "./components/mainComponentData.js"
import FirstPage from "./components/FirstPage.js";
import Beers from "./components/Beers.js";
import NewBeer from "./components/NewBeer.js"
// import RandomBeer from "./components/RandomBeer.js"
import AboutBeer from "./components/AboutBeer.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      isLoading: true,
      mainComponentData: mainComponentData
    }
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(response => {
        this.setState({
          data: response.data,
          isLoading: false,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  prepareMainComponents = () => {
    let arrMainComponents = this.state.mainComponentData.map((item, index) =>
      <Main key={index} path={item.path} src={item.img} title={item.title} text={item.text} />
    )
    return arrMainComponents;
  }

  findSelectedBeer = (id) => {
    let selectedBeer = this.state.data.find((beer) => beer._id === id);
    return selectedBeer;
  }

  render() {
    return (
      <div className="App">
        {this.state.data && <div className="row">
          <Switch>
            <Route exact path="/" render={(props) => (<FirstPage {...props} arr={this.prepareMainComponents()}></FirstPage>)} />
            <Route exact path='/beers' render={(props) => (<Beers {...props} beers={this.state.data}></Beers>)} />
            <Route exact path='/random-beer' component={AboutBeer}></Route>
            <Route exact path='/new-beer' component={NewBeer} />
            <Route exact path='/beers/:id' render={(props) => (<AboutBeer {...props} findSelectedBeer={this.findSelectedBeer}></AboutBeer>)} />
          </Switch>
        </div>}
      </div>
    );
  }
}

export default App;
