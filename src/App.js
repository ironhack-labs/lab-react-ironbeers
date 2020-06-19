import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'
// import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Home from './component/Home'
import AllBeers from './component/AllBeers'
import Single from './component/Single'
import New from './component/New'
import Random from './component/Random'


class App extends React.Component {

  state = {
    beers: []
  }
  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((res) => {
      console.log(res.data)
      this.setState({
        beers: res.data
      })
    })
  }

  render(){
    return (
      <div className="App">
      <Home />
            <Switch>
        <Route exact path="/beers" render={() => {
          return <AllBeers beers={this.state.beers} />
        }}/>
        <Route path="/beers/:id" render={() => {
          return <Single  />
        }}/>
        <Route exact path="/random-beer" render={() => {
          return <Random  />
        }}/>
        <Route path="/new-beer" render={() => {
          return <New />
        }}/>
        {/* <Route path="/search?q={query}" render={(routeProps) => {
          return <EditTodo {...routeProps} />
        }}/> */}
      </Switch>
      </div>
    );
  }

}

export default withRouter(App)
