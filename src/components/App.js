import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

//CSS
import './App.css';

//API
import BeerService from '../service/beers-service'

//components
import NavBar from './navigation/navigation'
import Home from './Home/home'
import BeersList from './beers/list/beers.list'
import Detail from './beers/details/details'
import Random from './beers/random/random-beer'
import New from './beers/new/new-beer'


class  App extends Component {
  constructor (){
    super ()
    this.state = {
      beersArr: []
    }
    this.BeerService = new BeerService()

  }

  componentDidMount = () => this.getList()

  getList = () => {
    this.BeerService
      .getAllBeers()
      .then(response => this.setState({beersArr: response.data}))
      .catch(err => console.log(err))
  }

  insertBeer = (newBeer) => {
    const beersCopy = [...this.state.beersArr]
    beersCopy.push(newBeer)
    console.log('la cerve que meto!: ', newBeer)
    this.setState({beersArr: beersCopy})
  }

  render () {
    return (
      <>
        <NavBar />

        <Switch>
          <Route exact path='/' render={() => <Home />}/>
          <Route exact path='/beers' render={() => <BeersList beers={this.state.beersArr}/>}/>
          <Route exact path='/random-beer' render={() => <Random />}/>
          <Route exact path='/new-beer' render={() => <New addBeer={this.insertBeer}/>}/>
          <Route exact path='/beer/:id' render={(props) => <Detail {...props}/>}/>
        </Switch>
      </>
    )
  }
}



export default App;
