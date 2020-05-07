import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { Router, Switch } from 'react-router-dom'
import Home from './home/Home'
import Beers from './beers/Beers'
import BeerDets from './beers/BeerDets'

class App extends Component {
	constructor() {
		super()
		this.state = {
			beers: [],
		}
	}

	componentDidMount() {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((response) => this.setState({ beers: response.data }))
			.catch((err) => console.log(err))
	}

	render() {
		return (
			<>
				<Home />
				<Switch>
					<Router path='/beers' render={() => <Beers beersApi={this.state.beers} />} />
					<Router path='/random-beer'></Router>
					<Router path='/beer/:id' render={(props) => <BeerDets {...props} />}></Router>
        </Switch>
        
        {/* //Consigo que se pinten aqui, pero cuando lo monto en la linea 29, no se pinta */}
				<Beers beersApi={this.state.beers} />
			</>
		)
	}
}

export default App
