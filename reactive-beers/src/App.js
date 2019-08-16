import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Beers from './components/Beers'
import Details from './components/Details'
import Random from './components/Random'

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/beers' exact component={Beers} />
				<Route path='/beers/:id' exact component={Details} />
				<Route path='/random-beer' exact component={Random} />
			</Switch>
		</div>
	)
}

export default App
