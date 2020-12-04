import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import BeerService from './../service/beers.service'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../components/App.css'

import Home from './home/Home'
import BeerList from './beerList/BeerList'
import BeerDetails from './beerDetails/BeerDetails'
import RandomBeer from './randomBeer/RandomBeer'
import BeerForm from './beerForm/BeerForm'

import { Modal } from 'react-bootstrap'


class App extends Component {

  constructor() {
    super()
    this.state = {
        beers: []
    }
    this.beerService = new BeerService()
  }


  componentDidMount = () => this.refreshBeers()


  refreshBeers = () => {
      this.beerService
          .getBeers()
          .then(res => this.setState({ beers: res.data }))
          .catch(err => console.log(err))
  }


  handleModal = visible => this.setState({ showModal: visible })


  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" exact render={() => <BeerList />} />
        <Route path="/beers/:beer_id" exact render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" exact render={props => <RandomBeer {...props} />} />
        <Route path="/new-beer" exact render={() => {
          <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
            <Modal.Body>
                <BeerForm closeModal={() => this.handleModal(false)} updateList={this.refreshBeers} />
            </Modal.Body>
          </Modal>
        }}/>
      </Switch>
    )
  }
}



export default App