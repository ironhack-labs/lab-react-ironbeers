import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/Home-Page'
import Header from './components/Header'
import BeerList from './components/Beer-List'

function App() {
	return (
		<>
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/beers' exact component={BeerList} />
				<Route path='/random-beer' exact component={Header} />
				<Route path='/new-beer' exact component={Header} />
			</Switch>
		</>
	)
}

export default App
